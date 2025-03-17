import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const terms = [
    {
      title: "Perhitungan Biaya Pengiriman",
      desc: "Charge tertinggi antara volume dan KG"
    },
    {
      title: "Pembayaran dan Konfirmasi",
      desc: "Semua transaksi dalam Rupiah (IDR) dengan kurs saat pemesanan dan tidak ada refund setelah pesanan diproses."
    },
    {
      title: "Kebijakan Selisih Item",
      desc: "Beda item dan selisih item yang terjadi, refund dan kompensasi bergantung pada kebijakan seller."
    }
  ];

  const navigation = [
    { name: 'Home', to: 'home' },
    { name: 'About Us', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: 'APR C/3A Batam, Indonesia',
      href: 'https://maps.app.goo.gl/dHVoVD9ayji7xNBi7',
      external: true,
    },
    {
      icon: FaWhatsapp,
      text: '+62 822-9900-5151',
      href: 'https://wa.me/+6282299005151?text=Hello,%20Jastipfully!',
      external: true,
    },
    {
      icon: FaEnvelope,
      text: 'jastipfully2020@gmail.com',
      href: 'mailto:jastipfully2020@gmail.com',
      external: false,
    },
  ];

  const socialMedia = [
    { Icon: FaFacebook, href: 'https://www.facebook.com/share/1TC1Ma2bfe/?mibextid=wwXIfr', external: true },
    { Icon: FaTiktok, href: 'https://www.tiktok.com/@jastipfully?_t=ZS-8uYqaq2KyLA&_r=1', external: true },
    { Icon: FaInstagram, href: 'https://www.instagram.com/jastipfully?igsh=b3cwOW5qMzd5NzZ4', external: true }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Terms and Conditions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">
              Syarat & Ketentuan
            </h2>
            <div className="space-y-6">
              {terms.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-gray-300 font-medium text-sm">{item.title}</h3>
                  <p className="text-gray-400" style={{fontSize: "10px"}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">
                Contact Us
              </h2>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, text, href, external }) => (
                  <motion.a 
                    key={text}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group hover:bg-gray-800/50 p-3 rounded-xl transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-orange-400/10 rounded-lg flex items-center justify-center group-hover:bg-orange-400/20 transition-colors">
                      <Icon className="text-orange-400 text-xl" />
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {text}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">
                Quick Links
              </h2>
              <nav className="space-y-3">
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 5 }}
                  >
                    <ScrollLink 
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="text-gray-400 hover:text-orange-400 transition-colors block cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">
                Follow Us
              </h2>
              <div className="flex gap-4">
                {socialMedia.map(({ Icon, href, external }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center hover:bg-orange-400/20 transition-colors group"
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="text-2xl text-orange-400 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Jastipfully. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}