/*
 * Copyright(C) IrisView Limited - All Rights Reserved
 * 
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential
 */


describe('AppManager', ()=> {
    

  it('lanuageChanged 事件能正确注册',  () => {    
    let am = app.getAppManager();
    
    expect(()=> {
        am.on("appStatusChange",(packageName, status)=>{
            console.log('packageName :', packageName );
            console.log('appStatus :', status );
         });
    }).not.toThrow();
  }) ;
  
})

// afterAll(()=> {
//   setTimeout(()=> {
//     app.stop();
//   }, 1000);
// })