import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/assets/jastipfully.jpg"
                alt="Jastipfully Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">
                Jastipfully
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Jastipfully adalah layanan jasa titip terpercaya yang menghubungkan Anda dengan produk-produk berkualitas dari China.
            </p>
          </motion.div>

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
              <motion.a 
                href="https://maps.google.com"
                className="flex items-center gap-4 group hover:bg-gray-800/50 p-3 rounded-xl transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-orange-400/10 rounded-lg flex items-center justify-center group-hover:bg-orange-400/20 transition-colors">
                  <FaMapMarkerAlt className="text-orange-400 text-xl" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  Jakarta, Indonesia
                </p>
              </motion.a>
              
              <motion.a 
                href="https://wa.me/+6281234567890"
                className="flex items-center gap-4 group hover:bg-gray-800/50 p-3 rounded-xl transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-orange-400/10 rounded-lg flex items-center justify-center group-hover:bg-orange-400/20 transition-colors">
                  <FaWhatsapp className="text-orange-400 text-xl" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  +62 812-3456-7890
                </p>
              </motion.a>

              <motion.a 
                href="mailto:jastipfully@gmail.com"
                className="flex items-center gap-4 group hover:bg-gray-800/50 p-3 rounded-xl transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-orange-400/10 rounded-lg flex items-center justify-center group-hover:bg-orange-400/20 transition-colors">
                  <FaEnvelope className="text-orange-400 text-xl" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  jastipfully@gmail.com
                </p>
              </motion.a>
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
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors block"
                  >
                    {item.name}
                  </Link>
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
              {[
                { Icon: FaFacebook, href: '#' },
                { Icon: FaTwitter, href: '#' },
                { Icon: FaInstagram, href: '#' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center hover:bg-orange-400/20 transition-colors group"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="text-2xl text-orange-400 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © 2025 Jastipfully. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}