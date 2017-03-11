// app/models/InwardBillLog.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our InwardBillLog model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('InwardBillLog', {
  InwardBillID: {
    type: Number,
    required: true,
    default: 0
  },
  Company: {
      type: String,
      default: 'NA'
    },
  Branch:  {
      type: String,
      default: 'NA'
    },
  VendorId: {
    type: Number,
    default: 0
  },
  VendorBillNo: {
    type: Number,
    default: 0
  },
  VendorBillDate: {
    type: Date,
    default: Date.now
  },
  BillReceivedDate: {
    type: Date,
    default: Date.now
  },
  BillNetAmount: {
    type: Number,
    default: 0
  },
  TaxAmount: {
    type: Number,
    default: 0
  },
  BillTypeId: {
    type: Number,
    default: 1
  },
  ClientId: {
    type: Number,
    default: 1
  },
  BrandId: {
    type: Number,
    default: 1
  },
  Remark: {
      type: String,
      default: 'NA'
    },
  Attachment: {
      type: String,
      default: 'NA'
    },
  CreatedBy: {
    type: Number,
    default: 1
  },
  CreatedOn: {
    type: Date,
    default: Date.now
  },
  CreatedIP: {
    type: String,
    default: 'localhost'
  },
  ModifiedBy: {
    type: Number,
    default: 1
  },
  ModifiedOn: {
    type: Date,
    default: Date.now
  },
  ModifiedIP: {
      type: String,
      default: 'NA'
    },
  IsActive: {
      type: Boolean,
      default: false
    },
  IsDeleted: {
      type: Boolean,
      default: false
    }

});
