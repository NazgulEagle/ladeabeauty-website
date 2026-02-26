/**
 * Download all La Dea Beauty images from Wix static CDN.
 * Run: node scripts/download-images.mjs
 */
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = join(__dirname, "..", "public", "images");

const images = {
  logos: [
    { url: "https://static.wixstatic.com/media/84fc2a_2a862c06de6d4d2381f2c480bf12ddf0%7Emv2.png", name: "favicon.png" },
    { url: "https://static.wixstatic.com/media/84fc2a_44826051e7ee4cb2b6a287b717cda562~mv2.png", name: "logo-main.png" },
    { url: "https://static.wixstatic.com/media/84fc2a_bfd21d7f87204dfe800132dabb20eae5~mv2.png", name: "logo-secondary.png" },
  ],
  homepage: [
    { url: "https://static.wixstatic.com/media/2bf10d_fb672bbb880f4ca382b56dec31e5d21d~mv2.jpg", name: "hero-1.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_2520e55770e1431683ce351bffe380fe~mv2.jpg", name: "portrait.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_2a62ee8f81e2429cba442d217a482a1a~mv2.avif", name: "content-1.avif" },
    { url: "https://static.wixstatic.com/media/2bf10d_75c4f1dc253a4afeb6445ec043eafc21~mv2.avif", name: "content-2.avif" },
    { url: "https://static.wixstatic.com/media/2bf10d_c40730d80f594486adf6cbe463f20e52~mv2.jpg", name: "hero-2.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_d8455c9d0fa4431faa601d3396d4311b~mv2.avif", name: "content-3.avif" },
  ],
  about: [
    { url: "https://static.wixstatic.com/media/2bf10d_5fbb2dba698142e5b8f2f3118a2cf830~mv2.jpg", name: "bauke-portrait.jpg" },
  ],
  nails: [
    { url: "https://static.wixstatic.com/media/2bf10d_07a5983f932c4b5aaf8d258c3ddd442e~mv2.jpg", name: "nails-01.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_0e444dcb01464f0197d7939fdf208f08~mv2.jpg", name: "nails-02.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_11ab5c50ade5423994d7c91ee754a9c8~mv2.jpg", name: "nails-03.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_1d74de5e07104ef19ae1b236443ef6ab~mv2.jpg", name: "nails-04.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_20b8787e2f774fb0b3c516a134a4c443~mv2.jpg", name: "nails-05.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_3425deeeaa774f24ab94d7a975de3d8f~mv2.jpg", name: "nails-06.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_466daf25525044ba82b127717a4d819b~mv2.jpg", name: "nails-07.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_4ae801896a464b7990a14e103c52985a~mv2.jpg", name: "nails-08.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_5495bbf31f9c48d188bb87fcf70e2792~mv2.jpg", name: "nails-09.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_68c0bc10d1324a938bd69b872d85d328~mv2.jpg", name: "nails-10.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_7832a25926eb4b449cce0294e4c09c8c~mv2.jpg", name: "nails-11.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_80bef91486a74bbbb12c4a35a419913b~mv2.jpg", name: "nails-12.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_939dab511759472ab1ff23f1db44767d~mv2.jpg", name: "nails-13.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_9d07cc06bd074dc3a3076287990e144a~mv2.jpg", name: "nails-14.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_a0c65799f5a44eca8f5a86c342447d18~mv2.jpg", name: "nails-15.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_a5aad734d873426587e3699ab9aea348~mv2.jpg", name: "nails-16.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_a60f1a49a1a84b60af069ef8ac1891e7~mv2.jpg", name: "nails-17.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_b571f8e2c0624c6c8a5e9ae307d90e5e~mv2.jpg", name: "nails-18.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_bd2f2e2ea44648a5a184e14e096d6724~mv2.jpg", name: "nails-19.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_c043777c0e474103a64e9f53b51d6ab0~mv2.jpg", name: "nails-20.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_d2cec9df04ef496cad14641594c9dcaf~mv2.jpg", name: "nails-21.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_d3c0db01cde54c3ba172990abd1ccf31~mv2.jpg", name: "nails-22.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_e52b3b18d9e24cf99fc225f0a32f6ad9~mv2.jpg", name: "nails-23.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_eee5be23e35543a59bbddb9a25b20d85~mv2.jpg", name: "nails-24.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_f965f71968f241d0bd0db2fac8a5f31e~mv2.jpg", name: "nails-25.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_fa481de5426e45229fdb907b0be89f93~mv2.jpg", name: "nails-26.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_fc1d013d4815470c862e32d001add504~mv2.jpg", name: "nails-27.jpg" },
  ],
  lashes: [
    { url: "https://static.wixstatic.com/media/2bf10d_13e1ba101c034258ae68d8f8c663ac1b~mv2.jpg", name: "lashes-01.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_297f3004285045a089f789ff6c661947~mv2.jpg", name: "lashes-02.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_320f5bf95dc7471abe94797beecb6a5f~mv2.jpg", name: "lashes-03.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_397b89c91af649c9ad0e65b3823e7d5d~mv2.jpg", name: "lashes-04.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_3c7197cdd2984b8fbb12e42b294c5675~mv2.jpg", name: "lashes-05.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_5e9f09fc8404400596e7f17ce1f03f32~mv2.jpg", name: "lashes-06.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_641e48dd2bbc460ab525cceb3f464b85~mv2.jpg", name: "lashes-07.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_69f9e75019f144d69e2b60208b59264d~mv2.jpg", name: "lashes-08.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_6e19059ef70140988676f9796ba3aacd~mv2.jpg", name: "lashes-09.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_70081173deea4b108a9cfa3aef1f3495~mv2.jpg", name: "lashes-10.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_8b6bb238b95b4d6c9684c170439ce480~mv2.jpg", name: "lashes-11.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_9c4d1ef4e99248d5a69647d8d3bf9d9f~mv2.jpg", name: "lashes-12.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_9e18eddbf9a74529a857c140c9b5ef93~mv2.jpg", name: "lashes-13.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_cc45d166e7014a328175800b0d73139f~mv2.jpg", name: "lashes-14.jpg" },
  ],
  brows: [
    { url: "https://static.wixstatic.com/media/2bf10d_051ef17e82ec4d86a877ef0b8674e354~mv2.jpg", name: "brows-01.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_4fafe60d34c349cea666e32e633732ce~mv2.jpg", name: "brows-02.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_a6dc6cdba46f49e6aa7c0b6ef42651a5~mv2.jpg", name: "brows-03.jpg" },
  ],
  products: [
    { url: "https://static.wixstatic.com/media/2bf10d_004c68f9f05f415db4c118c731137316~mv2.jpg", name: "rubberbase-01.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_0b3914ff6cca47cc813c0dcda44f9e69~mv2.jpg", name: "rubberbase-02.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_0ed91ed778984daa8fff7f7f6ba19947~mv2.jpg", name: "rubberbase-03.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_cafe68cdcdea404c926b7b85d8b1a6a1~mv2.jpg", name: "rubberbase-04.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_8f633be73eea4daf8c20661fd14fc6ea~mv2.jpg", name: "lash-ext-01.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_bc6f87717b024c88a0153cb4db3720a8~mv2.jpg", name: "lash-ext-02.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_d33391ac968f46ff9780b52e10a5f423~mv2.jpg", name: "lash-ext-03.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_fef2c3e9e3d34494be310798e404142f~mv2.jpg", name: "lash-ext-04.jpg" },
    { url: "https://static.wixstatic.com/media/2bf10d_75522d6d54a043d9b1acaa8bdf8d84a1~mv2.avif", name: "category-banner.avif" },
  ],
};

async function download(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    return { url, dest, size: buf.length, ok: true };
  } catch (e) {
    return { url, dest, error: e.message, ok: false };
  }
}

async function main() {
  let total = 0, success = 0, failed = 0;

  for (const [folder, items] of Object.entries(images)) {
    const dir = join(BASE, folder);
    if (!existsSync(dir)) await mkdir(dir, { recursive: true });

    // Download 5 at a time to be polite to CDN
    for (let i = 0; i < items.length; i += 5) {
      const batch = items.slice(i, i + 5);
      const results = await Promise.all(
        batch.map(({ url, name }) => download(url, join(dir, name)))
      );
      for (const r of results) {
        total++;
        if (r.ok) {
          success++;
          const kb = (r.size / 1024).toFixed(0);
          console.log(`  OK  ${kb}KB  ${r.dest.replace(BASE, "")}`);
        } else {
          failed++;
          console.log(`  FAIL  ${r.error}  ${r.url}`);
        }
      }
    }
  }

  console.log(`\nDone: ${success}/${total} downloaded, ${failed} failed`);
}

main();
