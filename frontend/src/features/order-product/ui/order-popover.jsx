export function OrderPopover({ handleSubmitOrder }) {
  return (
    <div className="bg-white px-4 py-3 shadow-2xl border border-gray-200 rounded-2xl">
      <form action={handleSubmitOrder} className="flex flex-col">
        <div className="pl-3 mb-2">Номер стола</div>
        <input
        required
          name="table"
          className="pl-5 py-1 bg-white border border-gray-200 rounded-2xl h-10 mb-4"
          placeholder="Введите номер стола"
          type="text"
        />
        <button className="bg-sky-500 px-2 py-1 text-white rounded-2xl text-2xl">
          Order now!
        </button>
      </form>
    </div>
  );
}
