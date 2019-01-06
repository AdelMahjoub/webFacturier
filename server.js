const path = require('path');
const express = require('express');
const ejs = require('ejs');
const html2pdf = require('wkhtmltopdf');

const Invoice = require('./models/Invoice');

const app = express();

app.set('env', process.env.NODE_ENV);
app.set('port', process.env.PORT || 8080);
app.set('trust proxy', true);

app.use(express.static(path.resolve('public')));

app.use(express.json());

app.post('/api/html2pdf', (req, res, next) => {
  const invoice = new Invoice(req.body.data);
  const templateOptions = Invoice.templateOptions(invoice)['basic'];
  invoice.companyTitle = Invoice.getCompanyTitle(invoice.meta.from);
  invoice.companyInfo = Invoice.getCompanyInfo(invoice.meta.from).replace(/\n/g, '<br/>');
  invoice.clientInfo = invoice.meta.to.replace(/\n/g, '<br/>');
  invoice.totals = Invoice.getTotals(invoice.items);
  ejs.renderFile(path.resolve('invoiceTemplates/basic.ejs'), { invoice }, {}, (err, str) => {
    if (!err) {
      return html2pdf(str, templateOptions).pipe(res);
    }
    console.log(err);
    return html2pdf('<b>An unexpected error occured, please try again</b>', options).pipe(res);
  });
});

app.listen(app.get('port'), () => {
  console.log(`server listening on\nport ${app.get('port')}\nenv ${app.get('env')}`);
});