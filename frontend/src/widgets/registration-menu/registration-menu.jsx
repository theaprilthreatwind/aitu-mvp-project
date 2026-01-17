import { RegistrationForm } from "@/features";

export function RegistrationMenu({ role }) {
  return (
    <div className="max-w-383 px-4 py-2 mx-auto mt-20 shadow rounded-2xl border border-gray-200">
      <div className="flex flex-col">
        <div className="text-3xl mb-4">
          {role === "MANAGER"
            ? "Register the restaurant"
            : "Customer registration"}
        </div>
        <RegistrationForm role={role} />
      </div>
    </div>
  );
}
