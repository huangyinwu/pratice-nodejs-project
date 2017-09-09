'use strict';

/**
 * pratice Node.js project
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import {expect} from 'chai';
import {request} from '../test';

describe('user', function () {

  it('user profile', async function () {

    const request = session();

    {
      const ret = await request.post('/api/login', {
        name: 'test2',
        password: '123456',
      });
      console.log(ret);
      expect(ret.token).to.be.a('string');
    }

    {
      const ret = await request.post('/api/user/profile', {});
      console.log(ret);
      expect(ret.user.email).to.equal('test2@example.com');
    }

  });

  it('user reset_password', async function () {

    const request = session();

    {
      const ret = await request.post('/api/login', {
        name: 'test2',
        password: '123456',
      });
      console.log(ret);
      expect(ret.token).to.be.a('string');
    }

    {
      const ret = await request.post('/api/user/reset_password', {
        code: 'test2',
        email: 'test2@example.com',
        password: '12345678',		
	  });
      console.log(ret);
      expect(ret.user.email).to.equal('test2@example.com');
    }

  });

});
