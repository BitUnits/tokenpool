

var lets_encrypt_dir = "/home/pex/ssl/"


  var ssl =  {

          key: lets_encrypt_dir + 'privkey.pem',
          cert: lets_encrypt_dir + 'cert.pem'

  }


exports.ssl = ssl;
