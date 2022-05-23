<template>
  <div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <!-- This is an example component -->
      <div class="max-w-6xl pt-5 mx-auto">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="p-4">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search petition"
              />
            </div>
          </div>
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Petition Type</th>
                <th scope="col" class="px-6 py-3">Status</th>
                <th scope="col" class="px-6 py-3">Create Date</th>
                <th scope="col" class="px-6 py-3">Update Date</th>
                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody v-for="p in state.petitions" :key="state.petitions._id">
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {{ p.petitionType }}
                </th>
                <td class="px-6 py-4">{{ p.status }}</td>
                <td class="px-6 py-4">{{ p.createdAt }}</td>
                <td class="px-6 py-4">{{ p.updatedAt }}</td>
                <td class="px-6 py-4">
                  <router-link
                    :to="{ name: 'View', params: { id: p._id } }"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >view</router-link
                  >
                </td>
                <td class="px-6 py-4">
                  <button
                    @click="Delete(p._id)"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import axiosClient from "../axios";

const store = useStore();
const state = reactive({ petitions: [] });

axiosClient
  .get("/auth/myProfile", {
    headers: { "x-auth-token": store.state.user.token },
  })
  .then(({ data }) => {
    sessionStorage.setItem("USERID", data._id);
    state.petitions = data.petitions;
  });

const Delete = (id) => {
  let indexOfArray = state.petitions.findIndex((i) => i._id == id);
  if (window.confirm("Do you really want to dalete.")) {
    axiosClient.delete(`petition/delete/${id}`).then(() => {
      state.petitions.splice(indexOfArray, 1);
    });
  }
};
</script>
