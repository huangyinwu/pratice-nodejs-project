'use strict';

/**
 * pratice Node.js project
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import {expect} from 'chai';
import {request} from '../test';

describe('login', function () {

  it('signup', async function () {

    try {
      const ret = await request.post('/api/signup', {
        name: 'test2',
        password: '123456',
      });
      throw new Error('should throws missing parameter "email" error');
    } catch (err) {
      expect(err.message).to.equal('email: missing parameter "email"');
    }

    {
      const ret = await request.post('/api/signup', {
        name: 'test2',
        password: '123456',
        email: 'test2@example.com',
      });
      console.log(ret);
      expect(ret.user.name).to.equal('test2');
      expect(ret.user.email).to.equal('test2@example.com');
    }

    {
      const ret = await request.post('/api/login', {
        name: 'test2',
        password: '123456',
      });
      console.log(ret);
      expect(ret.token).to.be.a('string');
    }

    {
      const ret = await request.post('/api/logout', {});
      console.log(ret);
    }

  });

});
