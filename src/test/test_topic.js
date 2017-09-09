'use strict';

/**
 * pratice Node.js project
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import {expect} from 'chai';
import {session} from '../test';

describe('topic', function () {

  it('create topic', async function () {

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
      const ret = await request.post('/api/topic/add', {
        title: '哈哈哈哈',
        content: '瓦赫哈哈哈',
        tags: 'test',
      });
      console.log(ret);
      expect(ret.topic.title).to.equal('哈哈哈哈');
      expect(ret.topic.content).to.equal('瓦赫哈哈哈');
      expect(ret.topic.tags).to.have.members(['test']);
    }

  });

  it('list topic', async function () {

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
      const ret = await request.post('/api/topic/list', {
        page: 0,
      });
      console.log(ret);
    }

  });

});
