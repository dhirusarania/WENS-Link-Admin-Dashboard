<template>
  <div class="navbar-spacing padding-top-30">
    <div v-if="showDropdown" class="popup">
      <div class="popup-main">
        <div class="popup-title">
          <h3>Sub Section</h3>
          <div class="add_dropdown pointer" @click="addInput">+</div>
        </div>
        <div class="popup-body">
          <div v-for="(p, index) in input" :key="p.id">
            <input v-model="p.name" type="text" style="width:70%" />
            <div
              @click="remove_input(index)"
              class="remove_field right"
              style="display: inline-block;  font-size:12px"
            >
              Remove
            </div>
          </div>
        </div>
        <div class="popup-action">
          <div class="pointer" @click="closeDropdownPanel">Save</div>
          <div class="pointer" @click="closeDropdownPanel">Cancel</div>
        </div>
      </div>
    </div>

    <div class="specification">
      <div class="holder">
        <h3>{{ subCat }}</h3>

        <div>
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr v-for="(p, index) in data" :key="p.id">
                <td>
                  <table
                    width="100%"
                    border="0"
                    cellspacing="2"
                    cellpadding="0"
                    class="product-spec"
                  >
                    <tbody>
                      <tr>
                        <th width="20%" style="text-align:left" colspan="">{{ p.name }}</th>
                        <th></th>
                      </tr>
                      <tr v-for="(q, index1) in p['sub']" :key="q.id">
                        <td><input type="checkbox" v-model="q.active">{{ q.name }}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn" @click="saveSpecs">Save</button>
        </div>

        <!-- <div>
          <div
            class="white"
            style="margin: 10px 0;width: 100%;border:1px solid #e6e6e6; box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 2px, rgba(0, 0, 0, 0.03) 0px 1px 0px"
          >
            <div
              class="section toolbar"
              style="display: flex;justify-content: space-between;border-bottom: 1px solid #e6e6e6"
            >
              <div
                class="container"
                style="display: flex;justify-content: space-between;"
              >
                <div class="add-section" @click="add_section">
                  + Add Section
                </div>
              </div>
            </div>
            <div>
              <div class="spec-section white container" id="templateHolder">
                <div
                  v-for="(p, index) in data"
                  :key="p.id"
                  class="input_fields_wrap drag-list"
                  id="h"
                >
                  <div style="display:flex;justify-content:space-between">
                    <div class="add_field_button" @click="add_field(index)">
                      Add More Fields
                    </div>
                    <div class="remove-section" @click="remove_section(index)">
                      Remove Section
                    </div>
                  </div>
                  <br />
                  <input
                    type="text"
                    v-model="p.name"
                    class="header-data input"
                    placeholder="Header"
                    style="display: inline-block;"
                  />
                  <div class="row">
                    <div
                      v-for="(q, index1) in p['values']"
                      :key="q.id"
                      class="col s24"
                    >
                      <input
                        class="input"
                        placeholder="Field Value"
                        id="data"
                        v-model="q.name"
                        type="text"
                        style="display: inline-block; width: 35%"
                      />                
                      <div
                        @click="remove_field(index, index1)"
                        class="remove_field right"
                        style="display: inline-block;  font-size:12px"
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="btn" @click="saveSpecs">Save</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      showDropdown: false,
      subCat: "",
      input: [{ name: "" }],
      dropdown_title: "false",
      category: this.$cookies.get("filter_edit"),
      data: []
    };
  },

  methods: {
    makeid: function(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return new Date().getTime() + result;
    },

    add_section: function() {
      var a = {
        title: "",
        url: "",
        type: 0,
        values: []
      };
      this.data.push(a);
    },

    add_field: function(id) {
      console.log(id);
      var a = {
        title: "",
        url: "",
        type: 0
      };
      this.data[id]["values"].push(a);
    },
    remove_section: function(index) {
      this.data.splice(index, 1);
    },
    remove_menu: function(section, index) {
      // this.$delete(this.data, index);
      console.log(section, index);
      this.data[section].splice(index, 1);
    },
    openDropdownPanel: function(section, index) {
      this.input = this.data[section]["sub"][index]["dropdown_items"];
      this.showDropdown = true;
    },
    closeDropdownPanel: function() {
      this.showDropdown = false;
    },
    addInput: function() {
      this.input.push({ name: "" });
    },
    remove_input: function(index) {
      this.input.splice(index, 1);
    },
    getsubCategoryDetails: function() {
      this.$store
        .dispatch("getsubCategoryDetails", this.category)
        .then(res => {
          if (JSON.parse(res.data.filters).length != 0) {
            this.data = JSON.parse(res.data.filters);
          }else{
            this.data = JSON.parse(res.data.specs);
          }
          this.subCat = res.data.name;
        })
        .catch(err => {
          console.log("error in request", err);
        });
    },
    saveSpecs: function() {
      var payload = {
        id: this.category,
        specs: JSON.stringify(this.data)
      };

      this.$store
        .dispatch("saveSpecs", payload)
        .then(res => {
          console.log(res);
          console.log("response");
          this.$router.push("/dashboard/templates/filters");
        })
        .catch(err => {
          console.log("error in request", err);
        });
    }
  },

  mounted() {
    console.log(this.$route.params.id);

    this.getsubCategoryDetails();
  }
};
</script>

<style>
.add-section,
.add_field_button {
  background: #2196f3;
  color: white;
  padding: 7px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 12px;
}

.remove-section,
.remove_field {
  background: #f44336;
  margin-left: 10px;
  color: white;
  padding: 7px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 12px;
}

input[tyep="text"],
.spec-section select {
  height: 35px;
  margin: 0 10px 10px 0;
  border-radius: 0;
  outline: none;
  width: 100%;
  font-size: 1rem;
  padding: 0.6rem 1rem;
  box-shadow: none;
  transition: all 0.3s;
}

.input_fields_wrap {
  padding: 15px 0 0;
}

.input_fields_wrap:not(:last-child) {
  border-bottom: 1px dashed #e6e6e6;
}

.popup {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}

.popup-main {
  background-color: white;
  margin: auto;
  position: absolute;
  max-width: 400px;
  height: 460px;
  left: 260px;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 5px;
}

.popup-body {
  height: 300px;
  overflow: auto;
  padding: 30px;
}

.popup-title {
  padding: 30px 30px 16px;
  border-bottom: 1px solid #00000024;
}
.popup-action {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 25px;
  box-shadow: 0px -7px 10px 0px #0000000d;
}

.popup:after {
  background-color: rgba(0, 0, 0, 0.83);
  margin: auto;
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.add_dropdown {
  background-color: #4caf50;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  box-shadow: 0px 6px 4px rgba(76, 175, 80, 0.25098);
  position: absolute;
  right: 40px;
}

.pointer {
  cursor: pointer;
}

th{
     height: 30px;
    padding-top: 20px;
}

tr{
  height: 30px
}
</style>
