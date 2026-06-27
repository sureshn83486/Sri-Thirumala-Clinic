import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Find files resembling a doctor photo in the root directory
const rootFiles = fs.readdirSync(__dirname);
const doctorFile = rootFiles.find(f => {
  const lowercase = f.toLowerCase();
  const isImage = /\.(png|jpe?g|webp|jfif|bmp)$/i.test(lowercase);
  if (!isImage) return false;
  
  return (
    lowercase.startsWith('doctor') ||
    lowercase.startsWith('dr') ||
    lowercase.startsWith('profile') ||
    lowercase.includes('nayak') ||
    lowercase.includes('doctor')
  );
});

if (doctorFile) {
  const srcPath = path.join(__dirname, doctorFile);
  const destPath = path.join(publicDir, 'doctor.png');
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`[Asset Copier] Copied ${doctorFile} from root to public/doctor.png`);
  } catch (err) {
    console.error(`[Asset Copier] Error copying ${doctorFile}:`, err);
  }
} else {
  console.log('[Asset Copier] No doctor.* image found in root to copy.');
}

// Find files resembling a clinic storefront photo in the root directory
const clinicFile = rootFiles.find(f => {
  const lowercase = f.toLowerCase();
  const isImage = /\.(png|jpe?g|webp|jfif|bmp)$/i.test(lowercase);
  if (!isImage) return false;
  
  return (
    lowercase.includes('clinic') ||
    lowercase.includes('storefront') ||
    lowercase.includes('facade') ||
    lowercase.includes('building') ||
    lowercase.includes('front') ||
    lowercase.includes('entrance')
  );
});

if (clinicFile) {
  const srcPath = path.join(__dirname, clinicFile);
  const destPath = path.join(publicDir, 'clinic.png');
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`[Asset Copier] Copied ${clinicFile} from root to public/clinic.png`);
  } catch (err) {
    console.error(`[Asset Copier] Error copying ${clinicFile}:`, err);
  }
} else {
  console.log('[Asset Copier] No clinic storefront image found in root to copy.');
}

// Find doctor banner (Banner 1/image.png)
const docBannerFile = rootFiles.find(f => {
  const lowercase = f.toLowerCase();
  const isImage = /\.(png|jpe?g|webp|jfif|bmp)$/i.test(lowercase);
  if (!isImage) return false;
  return (
    lowercase.includes('doctor_banner') ||
    lowercase.includes('banner_doctor') ||
    lowercase.includes('banner1') ||
    lowercase === 'image.png' ||
    lowercase === 'image_0.png'
  );
});

if (docBannerFile) {
  const srcPath = path.join(__dirname, docBannerFile);
  const destPath = path.join(publicDir, 'banner_doctor.png');
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`[Asset Copier] Copied ${docBannerFile} from root to public/banner_doctor.png`);
  } catch (err) {
    console.error(`[Asset Copier] Error copying ${docBannerFile}:`, err);
  }
}

// Find treatments banner (Banner 2/image_1.png)
const treatBannerFile = rootFiles.find(f => {
  const lowercase = f.toLowerCase();
  const isImage = /\.(png|jpe?g|webp|jfif|bmp)$/i.test(lowercase);
  if (!isImage) return false;
  return (
    lowercase.includes('treatments_banner') ||
    lowercase.includes('banner_treatments') ||
    lowercase.includes('banner2') ||
    lowercase === 'image_1.png'
  );
});

if (treatBannerFile) {
  const srcPath = path.join(__dirname, treatBannerFile);
  const destPath = path.join(publicDir, 'banner_treatments.png');
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`[Asset Copier] Copied ${treatBannerFile} from root to public/banner_treatments.png`);
  } catch (err) {
    console.error(`[Asset Copier] Error copying ${treatBannerFile}:`, err);
  }
}

// Find facilities banner (Banner 3/image_2.png)
const facBannerFile = rootFiles.find(f => {
  const lowercase = f.toLowerCase();
  const isImage = /\.(png|jpe?g|webp|jfif|bmp)$/i.test(lowercase);
  if (!isImage) return false;
  return (
    lowercase.includes('facilities_banner') ||
    lowercase.includes('banner_facilities') ||
    lowercase.includes('banner3') ||
    lowercase === 'image_2.png'
  );
});

if (facBannerFile) {
  const srcPath = path.join(__dirname, facBannerFile);
  const destPath = path.join(publicDir, 'banner_facilities.png');
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`[Asset Copier] Copied ${facBannerFile} from root to public/banner_facilities.png`);
  } catch (err) {
    console.error(`[Asset Copier] Error copying ${facBannerFile}:`, err);
  }
}

