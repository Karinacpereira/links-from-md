function getLinksFromMd(mdString) {
  // console.log(mdString);
  if (mdString === undefined) {
    throw new Error('Necessário inserir um texto para extrair os links');
  } else if (typeof mdString !== 'string') {
    throw new Error('Necessário inserir um texto válido');
  } else {
    return linkExtractor(mdString);
  }
}

function linkExtractor(mdString) {
  // console.log(mdString);

  let txt_re = /\[(\w+.+?)\]/g;
  let txtLink = mdString.match(txt_re);

  let url_re = /(https?:\/\/)?(w{3}\.)?[a-z0-9]+(\.\w{2,}){1,2}/g;
  let urlLink = mdString.match(url_re);

  // console.log(txtLink);
  // console.log(urlLink);

  let linksMd = [];
  let objLink = {};
  if (txtLink === null && urlLink === null) {
    return linksMd;
  }
  
  let result = urlLink.map((element, i) => {
    objLink = {
      href: urlLink[i],
      text: txtLink[i]
    };
    linksMd.push(objLink);
  });
  return linksMd;
} 

module.exports.getLinksFromMd = getLinksFromMd;