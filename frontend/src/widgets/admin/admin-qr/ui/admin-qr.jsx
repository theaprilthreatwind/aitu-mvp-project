import { QRCode } from "react-qr-code";

export function AdminQR({ restaurantName }) {
  return (
    <main className="w-8/9 h-screen overflow-y-scroll">
      <header className="flex px-6 items-center shadow-md w-full h-15 border-b border-neutral-200 z-20">
        <div className="">Menu Managament</div>
      </header>
      <section className="p-4">
        <div className="text-2xl">Here is menu's QR-code</div>
        <QRCode value={`${location.host}/restaurants/${restaurantName}`} />
      </section>
    </main>
  );
}
