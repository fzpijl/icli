/*
 * Copyright(C) IrisView Limited - All Rights Reserved
 * 
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential
 */
// const { app } = require("XRWeb")

const jestConfig = require('../jest.config')

console.log('begin test  iris-view in test.js')
console.log('iris-view app', app)

beforeEach(() => {
    jest.resetModules()
})

process.on('uncaughtException', (e) => {
    console.log('iris-view in uncaughte', e)
})

afterAll(() => {
    console.log('iris-view end in test')
})

// 每个函数测试前后销毁所有的 window
// beforeEach(() => {
//     app.destroyAllWindows();
// })

// afterEach(()=> {
//   app.destroyAllWindows();
// })

describe('app.createWindow', () => {

    it('如果没有传 type 参数，或者传入的参数不是 "2d", "3d", 应该抛出异常', () => {
        expect(() => {
            app.createWindow();
        }).toThrow();

        expect(() => {
            app.createWindow({ type: '22d' })
        }).toThrow()

        expect(() => {
            app.createWindow({ type: '2d' })
            app.createWindow({ type: '3d' })
        }).not.toThrow();
    });

    app.destroyAllWindows();


})

describe('app.getDataDirectory', () => {

    it('getDataDirectory 方法', () => {
        let dir = app.getDataDirectory();
        expect(typeof dir).toBe('string');
    });

})

describe('app.destroyWindow', () => {


    it('能销毁传入的 window', () => {
        app.destroyAllWindows();
        expect(app.windows.length).toBe(0);
        let w1 = app.createWindow({ type: '3d' });
        expect(app.windows.length).toBe(1);
        app.destroyWindow(w1);
        expect(app.windows.length).toBe(0);
    });

})

describe('app.destroyAllWindows', () => {

    it('能销毁传入的 window', () => {
        
        app.destroyAllWindows();

        expect(app.windows.length).toBe(0);
        app.createWindow({ type: '3d' });
        app.createWindow({ type: '3d' });
        app.createWindow({ type: '3d' });
        expect(app.windows.length).toBe(3);
        app.destroyAllWindows();
        expect(app.windows.length).toBe(0);
    });

})


describe('app.getWindowById', () => {
    it('应该返回之前创建过的 window 的  id ', () => {
        let w1 = app.createWindow({ type: '2d', id: 'hello' });
        let w2 = app.getWindowById('hello');
        expect(w1 === w2).toBe(true);
    });
    app.destroyAllWindows();
})

describe('app.findWindowById', () => {
    it('应该返回之前创建过的 window 的  id ', () => {
        app.destroyAllWindows();
        console.log('findWindowById')
        let w1 = app.createWindow({ type: '2d', id: 'hello' });
        let w2 = app.findWindowById('hello');
        console.log(w1, w2, w1 === w2, 'iris-view')
        expect(w1 === w2).toBe(true);
    });
    app.destroyAllWindows();
})


describe('app.windows', () => {

    
    // it 等同于 test
    it('是一个数组', () => {
        expect(Array.isArray(app.windows)).toBe(true);
    });

    it('能返回所有创建的 window', () => {
        app.destroyAllWindows()
        let w1 = app.createWindow({ type: '3d' });
        let w2 = app.createWindow({ type: '2d' });
        let w3 = app.createWindow({ type: '3d', id: 'w3' });

        expect(app.windows.length).toBe(3);
        expect(app.windows).toContain(w1);
        expect(app.windows).toContain(w2);
        expect(app.windows).toContain(w3);

    })

})

describe('app.createElement', () => {
    it('标签错误应该抛出异常', () => {

        expect(() => {
            app.createElement('invalidTAG');
        }).toThrow();

    })
})

describe('channel', () => {
    it('app.joinChannel 之后 可以 收到 app.broadcastMessage 发送的消息', done => {
        const { Message } = require('XRWeb');
        app.joinChannel('ccc');
        app.on('message', (msg) => {
            try {
                expect(msg.data.name).toBe('hello');
                done();
            } catch (err) {
                done(err);
            }

        })
        app.broadcastMessage(new Message('ccc', {
            name: 'hello'
        }))
    })

})


describe('app.<getSingleton> 测试', () => {
    test('app.getPackageManager 应该返回 object', () => {
        expect(typeof app.getPackageManager()).toBe('object');
    });
    test('app.getBattery 应该返回 object', () => {
        expect(typeof app.getBattery()).toBe('object');
    });
    test('app.getAudioManager 应该返回 object', () => {
        expect(typeof app.getAudioManager()).toBe('object');
    });
    test('app.getMediaManager 应该返回 object', () => {
        expect(typeof app.getMediaManager()).toBe('object');
    });

    test('app.getDisplay 应该返回 object', () => {
        expect(typeof app.getDisplay()).toBe('object');
    });
    test('app.getWifiManager 应该返回 object', () => {
        expect(typeof app.getWifiManager()).toBe('object');
    });
    test('app.getConnectivityManager 应该返回 object', () => {
        expect(typeof app.getConnectivityManager()).toBe('object');
    });

    test('app.getScreenCapturer 应该返回 object', () => {
        expect(typeof app.getScreenCapturer()).toBe('object');
    });

    test('app.getInputManager 应该返回 object', () => {
        expect(typeof app.getInputManager()).toBe('object');
    });

    test('app.getNotificationManager 应该返回 object', () => {
        expect(typeof app.getNotificationManager()).toBe('object');
    });

    test('app.getSystem 应该返回 object', () => {
        expect(typeof app.getSystem()).toBe('object');
    });
})

// afterAll(() => {
//         app.stop();
// })





