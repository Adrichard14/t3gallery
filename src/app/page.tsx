import Image from "next/image";
import Link from "next/link";

const mockURLs = [
  "https://t09nitr9a2.ufs.sh/f/gow9SkctdM0JUn4FbXqMisD5WIhfEqaTnkljOXr2ud7GZ9Jb",
  "https://t09nitr9a2.ufs.sh/f/gow9SkctdM0JMqz9QbT6jOqR9CXAJvtYbhn2oyd1KNUzeG7L",
  "https://t09nitr9a2.ufs.sh/f/gow9SkctdM0JxjN3Iz2O8HfF2LeyT7QEp4GVqlztPnrBCdSj"
];

const mockImages = mockURLs.map((url, index) => (
  {
    id: index,
    url
  }
));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> {
        [...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="w-48" key={image.id}>
            <img src={image.url} alt="thumb" />
          </div>
        ))
      }
      </div>
    </main>
  );
}
