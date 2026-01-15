import { LoginForm } from "@/features";

export function RegistrationMenu() {
  return (
    <div className="max-w-383 px-4 py-2 mx-auto mt-20 shadow rounded-2xl border border-gray-200">
      <div className="flex flex-col">
        <div className="text-3xl mb-4">Registration</div>
        <LoginForm />
      </div>
    </div>
  );
}
