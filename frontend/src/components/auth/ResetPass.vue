<template>
  <div class="">
    <div>
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Change your account
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
    <form class="mt-8 space-y-6" @submit="ResetPass">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            v-model="user.email"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Old Password</label>
          <input
            type="password"
            autocomplete="current-password"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Old Password"
            v-model="user.oldPass"
          />
        </div>
        <div>
          <label for="password" class="sr-only">New Password</label>
          <input
            type="password"
            autocomplete=""
            required=""
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="New Password"
            v-model="user.newPass"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          reset password
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import { useRouter } from "vue-router";
import axiosClient from "../../axios";

const router = useRouter();

const user = {
  email: "",
  oldPass: "",
  newPass: "",
};

const ResetPass = (ev) => {
  ev.preventDefault();
  axiosClient
    .patch("/auth/reset-password", user)
    .then(() => {
      alert("Change your password successfuly.");
      router.push({
        name: "Login",
      });
    })
    .catch((err) => {
      if (err) {
        alert("Invalid email or password.");
      }
    });
};
</script>

<style scoped></style>
