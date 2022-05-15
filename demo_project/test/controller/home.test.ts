import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/home.test.ts', () => {

  it('should GET /', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).get('/');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.text).toBe('Hello Midwayjs!');

    // close app
    await close(app);
  });

});
describe('test/controller/home.test.ts', () => {

  it('should GET /home/to_get', async () => {
    // create app
    const app = await createApp<Framework>();
    

    // make request
    var result = await createHttpRequest(app).get('/home/to_get');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result["body"]).toBe('//www.baidu.com/img/bd_logo1.png');
    expect(result["success"]).toBe('true');

    // close app
    await close(app);
  });

});