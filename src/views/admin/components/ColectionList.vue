<script>
import axios from "axios";
export default {
  name: "GetCollections",
  data() {
    return {
      collections: [],
      more: false,
      moreprods: [],
      moreid: "",
      morename: "",
      file: "",

      imgurl: import.meta.env.VITE_API_URL + "/getimage/",
    };
  },
  mounted() {
    axios
      .get(import.meta.env.VITE_API_URL + "/collections/getall")
      .then((response) => (this.collections = response.data));
  },
  methods: {
    pick(name,id) {
      this.moreid=id
      this.more = true;
      this.morename = name;
      axios
        .get(import.meta.env.VITE_API_URL + "/products/getbycollection/" + name)
        .then((response) => (this.moreprods = response.data));
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      let formData1 = new FormData();
      formData1.append("file", this.file);
      axios
        .post(
          import.meta.env.VITE_API_URL +
            "/collections/uploadimg/" +
            this.moreid,
          formData1,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          alert("Sikeres kép módosítás!")
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
  },
};
</script>

<template>
  <section v-if="more" class="moreb">
    <h1>
      Termékek <i>{{ morename }}</i> kollekcióban
    </h1>
    <div style="display: flex;align-items: center;">
      <h5>Boritókép módosítása:</h5>
      <input type="file" id="file" ref="file" @change="handleFileUpload()" />
    </div>

    <div class="moreprodlist">
      <div v-for="item in moreprods" class="prodb">
        <p>{{ item.prodname }}</p>
      </div>
    </div>
  </section>
  <section class="listprod">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Neve</th>
          <th>Típusa</th>
          <th>Neme</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in collections" :key="item._id">
          <td>{{ item.col_name }}</td>
          <td>{{ item.col_type }}</td>
          <td>{{ item.col_gender }}</td>
          <td @click="pick(item.col_name,item._id)">•••</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.moreprodlist {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.prodb {
  width: 30%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
}
.prodb img {
  width: 90px;
  height: 90px;
  border-radius: 5px;
}
.moreb {
  position: relative;
  top: 0;
  width: 100%;
  top: -8rem;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
  width: 100%;
  padding: 0.5rem;
  border: none;
}
.listprod {
  position: relative;
  top: 0;
  width: 100%;
  top: -8rem;
}
table {
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #bdbdbd, -5px -5px 13px #ffffff;
  width: 100%;
  padding: 0.5rem;
  border: none;
}
thead {
  background-color: lightsalmon;
  position: sticky;
  top: 0;
}
tbody {
}
tr {
  height: 30px;
}
th,
td {
  text-align: center;
  border-bottom: 1px solid gray;
}
</style>
