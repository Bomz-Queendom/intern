<template>
  <div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Create Petition</h1>
      </div>
    </header>
    <main>
      <!-- This is an example component -->
      <div class="max-w-5xl mx-auto p-16 pd-10">
        <form @submit="Create">
          <div class="mb-6">
            <label
              for="petitionType"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Petition Type</label
            >
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              v-model="petition.petitionType"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="problemDetail"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Detail</label
            >
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              v-model="petition.problemDetail"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="needCorrective"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Need Corrective</label
            >
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              v-model="petition.needCorrective"
              required
            />
          </div>
          <div>
            <label
              for="needCorrective"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Image</label
            >
            <input
              type="file"
              @change="handleFileUpload"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <br />
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import axiosClient from "../../axios.js";
import { useStore } from "vuex";
import { reactive } from "vue";
const store = useStore();

const petition = {
  petitionType: "",
  problemDetail: "",
  needCorrective: "",
  status: "wait",
  images: null,
};

let file = null;

const handleFileUpload = (ev) => {
  file = ev.target.files[0];
};

const Create = (ev) => {
  ev.preventDefault();
  const fd = new FormData();
  fd.append("petitionType", petition.petitionType);
  fd.append("problemDetail", petition.problemDetail);
  fd.append("needCorrective", petition.needCorrective);
  fd.append("status", petition.status);
  fd.append("images", file);
  axiosClient.post(`/petition/create/${store.state.user.data}`, fd, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  alert("Created Success.");
  router.push({ name: "Dashboard" });
};
</script>
