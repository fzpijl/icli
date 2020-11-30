/*
 * Copyright(C) IrisView Limited - All Rights Reserved
 * 
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential
 */

// const { app } = require("XRWeb")

console.log('begin test  iris-view in Locale.test.js')
console.log('iris-view app', app)
afterAll(() => {
  console.log('iris-view end in Locale.test')
})


describe('Locale', ()=> {
    it('getLanguage 方法能被调用', () => {      
        let locale = app.getLocale();
        let language = locale.getLanguage();
        expect(typeof language).toBe('string'); 
   });

  it('lanuageChanged 事件能正确注册',  () => {    
    let locale = app.getLocale();
    
    expect(()=> {
        locale.on("lanuageChanged",(language)=> {
            console.log("--------------Entering languageChanged Event--------------");
            console.log("New Language: ", language);
        });
    }).not.toThrow();
}) ;
  
})


// afterAll(()=> {
//     app.stop();
// })