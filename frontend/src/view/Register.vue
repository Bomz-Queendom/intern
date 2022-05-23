<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-10"
  >
    <div>
      <form @submit="Register">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div>
            <img
              class="mx-auto mt-5 h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              {{ " " }}
              <router-link
                :to="{ name: 'Login' }"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                sign in your account.
              </router-link>
            </p>
          </div>
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email address</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  v-model="user.email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="current-password"
                  v-model="user.password"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="firstName"
                  class="block text-sm font-medium text-gray-700"
                  >First name</label
                >
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autocomplete="given-name"
                  v-model="user.firstName"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="lastName"
                  class="block text-sm font-medium text-gray-700"
                  >Last name</label
                >
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autocomplete="family-name"
                  v-model="user.lastName"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="age" class="block text-sm font-medium text-gray-700"
                  >Age</label
                >
                <input
                  type="text"
                  name="age"
                  id="age"
                  autocomplete=""
                  v-model="user.age"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="gender"
                  class="block text-sm font-medium text-gray-700"
                  >Gender</label
                >
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  autocomplete=""
                  v-model="user.gender"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="religion"
                  class="block text-sm font-medium text-gray-700"
                  >Religion</label
                >
                <input
                  type="text"
                  name="religion"
                  id="religion"
                  autocomplete=""
                  v-model="user.religion"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="ethnicity"
                  class="block text-sm font-medium text-gray-700"
                  >Ethnicity</label
                >
                <input
                  type="text"
                  name="ethnicity"
                  id="ethnicity"
                  autocomplete=""
                  v-model="user.ethnicity"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="nationality"
                  class="block text-sm font-medium text-gray-700"
                  >Nationality</label
                >
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  autocomplete=""
                  v-model="user.nationality"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="phoneNum"
                  class="block text-sm font-medium text-gray-700"
                  >Phone Number</label
                >
                <input
                  type="text"
                  name="phoneNum"
                  id="phoneNum"
                  autocomplete=""
                  v-model="user.phoneNum"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="idCard"
                  class="block text-sm font-medium text-gray-700"
                  >ID card</label
                >
                <input
                  type="text"
                  name="idCard"
                  id="idCard"
                  autocomplete=""
                  v-model="user.idCard"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="dateOfBirth"
                  class="block text-sm font-medium text-gray-700"
                  >Date Of Birth</label
                >
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  autocomplete=""
                  v-model="user.dateOfBirth"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-2 lg:col-span-2">
                <label
                  for="houseNumber"
                  class="block text-sm font-medium text-gray-700"
                  >House Number</label
                >
                <input
                  type="text"
                  name="houseNumber"
                  id="houseNumber"
                  autocomplete=""
                  v-model="user.houseNumber"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-2 lg:col-span-2">
                <label
                  for="subDistrict"
                  class="block text-sm font-medium text-gray-700"
                  >Sub District</label
                >
                <input
                  type="text"
                  name="subDistrict"
                  id="subDistrict"
                  autocomplete="address-level2"
                  v-model="user.subDistrict"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label
                  for="district"
                  class="block text-sm font-medium text-gray-700"
                  >District</label
                >
                <input
                  type="text"
                  name="district"
                  id="district"
                  autocomplete="address-level2"
                  v-model="user.district"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="province"
                  class="block text-sm font-medium text-gray-700"
                  >Province</label
                >
                <select
                  id="province"
                  name="province"
                  autocomplete="address-level1"
                  v-model="user.province"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Phayao</option>
                  <option>Chiangmai</option>
                  <option>Chiangrai</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                <label
                  for="postalCode"
                  class="block text-sm font-medium text-gray-700"
                  >ZIP / Postal code</label
                >
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  autocomplete="postal-code"
                  v-model="user.postalCode"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";
const router = useRouter();

const user = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  religion: "",
  ethnicity: "",
  nationality: "",
  phoneNum: "",
  dateOfBirth: "",
  idCard: "",
  email: "",
  password: "",
  houseNumber: "",
  subDistrict: "",
  district: "",
  province: "",
  postalCode: "",
};

const Register = (ev) => {
  ev.preventDefault();
  store.dispatch("Register", user).then((res) => {
    router.push({
      name: "Dashboard",
    });
  });
};
</script>

<style scoped></style>
