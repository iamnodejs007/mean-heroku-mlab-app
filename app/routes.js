 // app/routes.js

 // grab the InwardBillLog model we just created
 var InwardBillLog = require('./models/InwardBillLog');

 module.exports = function(app) {

   // server routes ===========================================================
   // handle things like api calls
   // authentication routes

   // sample api route
   app.get('/api/InwardBillLogs', function(req, res) {
     // use mongoose to get all InwardBillLogs in the database
     InwardBillLog.find(function(err, InwardBillLogs) {

       // if there is an error retrieving, send the error. 
       // nothing after res.send(err) will execute
       if (err)
         res.send(err);

       res.json(InwardBillLogs); // return all InwardBillLogs in JSON format
     });
   });

   // route to handle creating goes here
   app.post('/api/AddInwardBillLog', function(req, res) {
     var requestData = req.body;

     var i = new InwardBillLog({
	   Company : requestData.Company,
       VendorBillNo : requestData.VendorBillNo,
       VendorBillDate : requestData.VendorBillDate,
       CreatedOn : requestData.CreatedOn,
	   BillNetAmount : requestData.BillNetAmount,
	   TaxAmount : requestData.TaxAmount,
	   BillTypeId : requestData.BillTypeId,
	   BillReceivedDate : requestData.BillReceivedDate,
	   Attachment : requestData.Attachment
     });
     i.save(function(err) {
       // we've saved the i into the db here
       if (err) throw err;

     });
   });
   
      // route to handle updating goes here
   app.put('/api/UpdateInwardBillLog/:id', function(req, res) {
   var requestData = req.body;
console.log('requestData');
console.log(requestData);
var i = new InwardBillLog({
		   Company : requestData.Company,
       VendorBillNo : requestData.VendorBillNo,
       VendorBillDate : requestData.VendorBillDate,
       CreatedOn : requestData.CreatedOn,
	   BillNetAmount : requestData.BillNetAmount,
	   TaxAmount : requestData.TaxAmount,
	   BillTypeId : requestData.BillTypeId,
	   BillReceivedDate : requestData.BillReceivedDate,
	   Attachment : requestData.Attachment
});

console.log('i');
console.log(i);
 var upsertData = i.toObject();
console.log('var upsertData = i.toObject();');
console.log(upsertData);
 
 delete upsertData._id;
 
console.log('delete upsertData._id;');
console.log(upsertData);

     return InwardBillLog.update({ _id: req.params.id }, upsertData, {upsert: true}, function(err) {
          if (!err) {
              return res.send("updated");
          } else {
              console.log(err);
              return res.send(404, { error: "InwardBillLog was not updated." });
          }
    });
	
   /*InwardBillLog.findOne({_id : req.params.id},
	 function (err, doc){
	   console.log(doc);
	   doc.Company = requestData.Company;
       doc.VendorBillNo = requestData.VendorBillNo;
       doc.VendorBillDate = requestData.VendorBillDate;
       doc.CreatedOn = requestData.CreatedOn;
	   doc.BillNetAmount = requestData.BillNetAmount;
	   doc.TaxAmount = requestData.TaxAmount;
	   doc.BillTypeId = requestData.BillTypeId;
	   doc.BillReceivedDate = requestData.BillReceivedDate;
	   doc.Attachment = requestData.Attachment;
	   doc.save(function(err) {
       // we've saved the i into the db here
       if (err) throw err;

     });
});*/
	 
   });

   // route to handle delete goes here
   app.delete('/api/DeleteInwardBillLog/:id', function(req, res) {
   console.log(req.params.id + ' delete called');
	   InwardBillLog.find({_id:req.params.id}).remove().exec();
   });

   // frontend routes =========================================================
   // route to handle all angular requests
   app.get('*', function(req, res) {
     res.sendfile('./public/views/index.html'); // load our public/index.html file
   });
 };
