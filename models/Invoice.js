const shortid = require('shortid');

class Invoice {
  constructor(props = {}) {
    this.id = props.id || shortid.generate();
    this.type = props.type || 'Facture';
    this.types = ['Facture', 'Devis'];
    this.items = props.items ? [...props.items] : [];
    this.meta = props.meta ? { ...props.meta } : {
      date: (new Date()).toLocaleDateString(),
      from: '',
      to: '',
      number: '',
      terms: ''
    };
    this.options = props.options ? { ...props.options } : {
      detailed: false,
      withTaxes: false
    };
  }

  /**
   * 
   * @param {ItemData} item
   * @returns {{subTotalTaxExcluded, subTotalTaxIncluded, subTotalTax}} 
   */
  static getSubTotals(item) {
    const subTotalTaxExcluded = +item.quantity * +item.price;
    const subTotalTax = subTotalTaxExcluded * (+item.tax / 100);
    const subTotalTaxIncluded = subTotalTaxExcluded + subTotalTax;
    return {
      subTotalTaxExcluded,
      subTotalTaxIncluded,
      subTotalTax
    }
  }

  /**
   * 
   * @param {[ItemData]} items
   * @returns {{totalTaxExcluded: number, totalTaxIncluded: number, totalTaxes: number}} 
   */
  static getTotals(items) {
    let totalTaxIncluded = 0;
    let totalTaxExcluded = 0;
    let totalTaxes = 0;
    if (items.length) {
      items.forEach(item => {
        const subTotals = Invoice.getSubTotals(item);
        totalTaxExcluded += subTotals.subTotalTaxExcluded;
        totalTaxIncluded += subTotals.subTotalTaxIncluded;
        totalTaxes += subTotals.subTotalTax;
      });
    }
    return {
      totalTaxExcluded,
      totalTaxIncluded,
      totalTaxes
    };
  }

  /**
   * 
   * @param {string} text
   * @returns {string} 
   */
  static getCompanyTitle(text) {
    return text.split('\n')[0];
  }

  /**
   * 
   * @param {string} text
   * @returns {string} 
   */
  static getCompanyInfo(text) {
    return text.split('\n').slice(1).join('\n');
  }

  /**
   * 
   * @param {Invoice} invoice 
   * @returns {object}
   */
  static templateOptions(invoice) {
    return {
      'basic': {
        encoding: "utf-8",
        noPdfCompression: true,
        title: `${invoice.type.toLowerCase()}-${invoice.meta.number}`,
        disableSmartShrinking: false,
        footerRight: '[page] / [topage]'
      }
    }
  }

}

module.exports = Invoice;


