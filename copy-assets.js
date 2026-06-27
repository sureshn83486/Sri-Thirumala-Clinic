import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const assetsDir = path.join(__dirname, 'assets', 'images');

function findAndCopy(patterns, destName) {
  let foundFile = null;
  let sourceDir = null;

  // 1. Try assets/images first
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const file = files.find(f => {
      const lowercase = f.toLowerCase();
      const isImage = /\.(png|jpe?g|webp|jfif|bmp)$/i.test(lowercase);
      if (!isImage) return false;
      return patterns.some(p => lowercase.includes(p) || lowercase === p);
    });
    if (file) {
      foundFile = file;
      sourceDir = assetsDir;
    }
  }

  // 2. Try root directory second
  if (!foundFile) {
    const files = fs.readdirSync(__dirname);
    const file = files.find(f => {
      const lowercase = f.toLowerCase();
      const isImage = /\.(png|jpe?g|webp|jfif|bmp)$/i.test(lowercase);
      if (!isImage) return false;
      return patterns.some(p => lowercase.includes(p) || lowercase === p);
    });
    if (file) {
      foundFile = file;
      sourceDir = __dirname;
    }
  }

  if (foundFile) {
    const srcPath = path.join(sourceDir, foundFile);
    const destPath = path.join(publicDir, destName);
    try {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[Asset Copier] Copied ${foundFile} from ${sourceDir === assetsDir ? 'assets/images' : 'root'} to public/${destName}`);
      return true;
    } catch (err) {
      console.error(`[Asset Copier] Error copying ${foundFile}:`, err);
    }
  } else {
    console.log(`[Asset Copier] No matching file found for ${destName}`);
  }
  return false;
}

// 1. Doctor Photo
findAndCopy(['doc image', 'doc_image', 'doctor', 'dr', 'profile', 'nayak'], 'doctor.png');

// 2. Clinic Storefront
findAndCopy(['clinic', 'storefront', 'facade', 'building', 'front', 'entrance'], 'clinic.png');

// 3. Doctor Banner
findAndCopy(['about doc', 'about_doc', 'doctor_banner', 'banner_doctor', 'banner1', 'image.png', 'image_0.png'], 'banner_doctor.png');

// 4. Treatments Banner
findAndCopy(['treatments_banner', 'banner_treatments', 'banner2', 'image_1.png', 'treatments.png', 'treatments_page', '1.png', '1'], 'banner_treatments.png');

// 5. Facilities Banner
findAndCopy(['facilities_banner', 'banner_facilities', 'banner3', 'image_2.png', 'facilities.png', 'facilities_page', '2.png', '2'], 'banner_facilities.png');


