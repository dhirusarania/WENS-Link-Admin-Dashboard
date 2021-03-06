// import Vuex from 'vuex';
// import Vue from 'vue';

// Vue.use(Vuex);

// const createStore = () => {
//     return new Vuex.Store({
//         state: {
//             registrations: [],
//             users : 0
//         },
//         getters:{

//             getCurrentUser(state){
//                 return state.users
//             }
//         },
//         mutations:{
//             saveCurrentLoggedInUser(state, exercise){
//                 console.log('selecting exercise mutation, ' + exercise)
//                 state.users = exercise
//               }
//         },
//         actions:{
//             saveCurrentLoggedInUser(context, exercise){
//                 console.log('selecting exercise action, ' + exercise)
//                 context.commit('saveCurrentLoggedInUser', exercise);
//               }
//         }
//     });
//   };

//   export default createStore

import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

export const state = () => ({
    getCategory: [],
    getAllProducts: [],
    getAllOrder: [],
    getAllAuction: [],
    getAllCompletedAuction: [],
    getAllOngoingAuction: [],
    singleProduct: [],
    company_name: "",
    username: ""
});

export const mutations = {
    getCategory(state, getCategory) {
        console.log("selecting exercise mutation, " + getCategory);
        state.getCategory = getCategory;
    },
    getAllProducts(state, getAllProducts) {
        console.log("selecting exercise mutation, " + getAllProducts);
        state.getAllProducts = getAllProducts;
    },
    getAllOrder(state, getAllOrder) {
        console.log("selecting exercise mutation, " + getAllOrder);
        state.getAllOrder = getAllOrder;
    },
    getAllAuction(state, getAllAuction) {
        console.log("selecting exercise mutation, " + getAllAuction);
        state.getAllAuction = getAllAuction;
    },
    getAllCompletedAuction(state, getAllCompletedAuction) {
        console.log("selecting exercise mutation, " + getAllCompletedAuction);
        state.getAllCompletedAuction = getAllCompletedAuction;
    },
    getAllOngoingAuction(state, getAllOngoingAuction) {
        console.log("selecting exercise mutation, " + getAllOngoingAuction);
        state.getAllOngoingAuction = getAllOngoingAuction;
    },
    singleProduct(state, singleProduct) {
        console.log("selecting exercise mutation, " + singleProduct);
        state.singleProduct = singleProduct;
    },
    loggedUserData(state, loggedUserData) {
        console.log("selecting exercise mutation, " + loggedUserData);
        state.loggedUserData = loggedUserData;
    },
    usertype(state, usertype) {
        console.log("selecting exercise mutation, " + usertype);
        state.usertype = usertype;
    },
    company_name(state, company_name) {
        console.log("selecting exercise mutation, " + company_name);
        state.company_name = company_name;
    },
    username(state, username) {
        console.log("selecting exercise mutation, " + username);
        state.username = username;
    }
};

export const getters = {
    get_selectedUserMessage(state) {
        return state.selectedUserMessage;
    }
};

export const actions = {
    // resetCogetCategoryunter({ commit, state }, payload) {

    //     console.log(payload)

    //     var bodyFormData = new FormData()

    //     bodyFormData.append('customer_id', payload)

    //     return new Promise((resolve, reject) => {

    //         axios({
    //             method: 'POST',
    //             url: state.api.resetCounter,
    //             data: bodyFormData,
    //             contentType: 'application/json',
    //             headers: {
    //                 'Authorization': "Bearer " + this.$cookies.get('access_token')
    //             }
    //         })
    //             .then(res => {
    //                 console.log(res)
    //                 console.log('response')
    //                 commit('checkCounter', 0);
    //                 resolve(res)
    //             })
    //             .catch(err => {
    //                 console.log('error in request', err)
    //             })
    //     })
    // },

    loginAsVendor({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    data: payload,
                    url: state.api.loginAsVendor,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getCategory({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getCategory,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getCategory", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    addCategory({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    url: state.api.getCategory,
                    data: payload,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getCategory", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getsubCategory({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            if (payload == 0) {
                payload = "all";
            }

            axios({
                    method: "GET",
                    url: state.api.getsubCategory + "/" + payload,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getCategory", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    invoice_success({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.invoice_success + payload,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getCategory", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },
    addSubCategory({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            console.log(payload);
            var bodyFormData = new FormData();
            bodyFormData.append("name", payload.name);
            bodyFormData.append("category", payload.category);

            axios({
                    method: "POST",
                    url: state.api.getsubCategory + "/" + payload.category,
                    data: bodyFormData,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getCategory", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getsubCategoryDetails({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getsubCategoryDetails + payload,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getCategoryDetails({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getCategory + "/" + payload,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    saveSpecs({ commit, state }, payload) {
        var bodyFormData = new FormData();

        bodyFormData.append("id", payload.id);

        bodyFormData.append("specs", payload.specs);

        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    url: state.api.getsubCategoryDetails + payload.id,
                    contentType: "application/json",
                    data: bodyFormData,
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getCategory", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    saveSubmenu({ commit, state }, payload) {
        var bodyFormData = new FormData();

        bodyFormData.append("id", payload.id);

        bodyFormData.append("submenu", payload.submenu);

        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    url: state.api.getCategory + "/" + payload.id,
                    contentType: "application/json",
                    data: bodyFormData,
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getCategory", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getBrand({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            if (payload == 0) {
                payload = "all";
            }

            axios({
                    method: "GET",
                    url: state.api.getBrand + "/" + payload,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getCategory", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    allProducts({ commit, state }, { limit, offset, query }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.allProducts + "?limit=" + limit + "&offset=" + offset + "&search=" + query,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getAllProducts", res.data.result);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getAllOrder({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getAllOrder,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getAllOrder", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getAllAuction({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getAllAuction,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getAllAuction", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getAllCompletedAuction({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getAllCompletedAuction +
                        localStorage.getItem("currentUserID"),
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getAllCompletedAuction", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getAllOngoingAuction({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getAllOngoingAuction +
                        localStorage.getItem("currentUserID"),
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getAllOngoingAuction", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    singleProduct({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.singleProduct + localStorage.getItem("auction_item"),
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("singleProduct", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    addProduct({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    data: payload,
                    url: state.api.addProduct,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch((error) => {
                    console.log(error.response)
                    reject(error);
                })
        });
    },

    addAuction({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    data: payload,
                    url: state.api.addAuction,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    deleteProduct({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "DELETE",
                    data: payload,
                    url: state.api.deleteProduct + payload + "/",
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getSingleProduct({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getSingleProducts + payload + "/",
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    updateProduct({ commit, state }, { payload, id }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    data: payload,
                    url: state.api.singleupdate + id + "/",
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                }).catch((error) => {
                    console.log(error.response)
                    reject(error);
                })
        });
    },

    deleteCategory({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "DELETE",
                    data: payload,
                    url: state.api.categoryFunctions + payload,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    editCategory({ commit, state }, { id, payload }) {
        console.log(id);
        console.log(payload);

        console.log(state.api.categoryFunctions);

        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    data: payload,
                    url: state.api.categoryFunctions + id,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    editSubCategory({ commit, state }, { id, payload }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    data: payload,
                    url: state.api.editSubCategory + id,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    deleteSubCategory({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "DELETE",
                    data: payload,
                    url: state.api.deleteSubCategory + payload,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    deleteBrand({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "DELETE",
                    data: payload,
                    url: state.api.deleteBrand + payload,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    allProductsRequests({ commit, state }, { limit, offset }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.allProductsRequests +
                        "?limit=" +
                        limit +
                        "&offset=" +
                        offset,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    changeProductStatus({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            var bodyFormData = new FormData();

            bodyFormData.append("status", payload.status);
            bodyFormData.append("product_name", payload.product_name);
            bodyFormData.append("sku", payload.sku);
            bodyFormData.append("number", payload.number);

            axios({
                    method: "POST",
                    data: bodyFormData,
                    url: state.api.changeProductStatus + payload.id,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },
    changeUserStatus({ commit, state }, { id, status }) {
        return new Promise((resolve, reject) => {
            var bodyFormData = new FormData();

            bodyFormData.append("status", status);

            axios({
                    method: "PUT",
                    data: bodyFormData,
                    url: state.api.changeUserStatus + id,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getAllCustomers({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getAllCustomers,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getAllSeller({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getAllSeller,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getAllSubAdmin({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getAllSubAdmin,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    addSubAdmin({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    data: payload,
                    url: state.api.addSubAdmin,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    commissionList({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.commissionList,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    commissionListtask({ commit, state }, { id, payload }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    data: payload,
                    url: state.api.commissionListtask,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    commissionListtaskEdit({ commit, state }, { id, payload }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    data: payload,
                    url: state.api.commissionListtaskEdit + id,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },
    getAllBanner({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getallbanner,
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },
    addBanner({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    data: payload,
                    url: state.api.addBanner,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },
    editDeleteBanner({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "DELETE",
                    url: state.api.editDeleteBanner + payload,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    navbarOrder({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.navbarOrder,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    navbarOrderUpdate({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    data: payload,
                    url: state.api.navbarOrderUpdate + "ActiveCategory",
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    WebsiteNav({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.WebsiteNav,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },


    WebsiteNavUpdate({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    data: payload,
                    url: state.api.WebsiteNavUpdate + "WebsiteNav",
                    contentType: "application/json"
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    HomepageCarousel({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.HomepageCarousel,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },


    HomepageCarouselUpdate({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    data: payload,
                    url: state.api.HomepageCarouselUpdate + "HomepageCarousel",
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    GetAllCarousels({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.GetAllCarousels,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    gethomepagecarousel({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.gethomepagecarousel + this.$cookies.get('customizeCarousel'),
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    gethomepagecarouseldetails({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.gethomepagecarouseldetails + this.$cookies.get('customizeCarousel'),
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    edithomepagecarouseldetails({ commit, state }, { payload, id }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    data: payload,
                    url: state.api.gethomepagecarousel + id,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    edithomepagecarousel({ commit, state }, { payload, id }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    data: payload,
                    url: state.api.edithomepagecarousel + id,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    deletehomepagecarousel({ commit, state }, id) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "DELETE",
                    url: state.api.edithomepagecarousel + id,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    gethomepagecarouseldetailscreate({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    data: payload,
                    url: state.api.gethomepagecarouseldetailscreate,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    createcarousel({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "POST",
                    data: payload,
                    url: state.api.createcarousel,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getAnalytics({ commit, state }, days) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getAnalytics + days,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    getProductIssues({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getProductIssues,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    admin_counts({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.admin_counts,
                    contentType: "application/json",
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },



    addSellerProduct({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                    method: 'POST',
                    data: payload,
                    url: state.api.addSellerProduct,
                    contentType: 'application/json',
                    headers: {
                        'Authorization': "Bearer " + this.$cookies.get('access_token')
                    }
                })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },


    allProducts__single({ commit, state }, { limit, offset, query }) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.allProducts__single + "?limit=" + limit + "&offset=" + offset + "&search=" + query,
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    commit("getAllProducts", res.data.result);
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },



    getSingleVendorProduct({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            axios({
                    method: "GET",
                    url: state.api.getSingleVendorProduct + payload + "/",
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    console.log("error in request", err);
                    reject(err)
                });
        });
    },

    updateSellerSingleProduct({ commit, state }, { payload, id }) {



        return new Promise((resolve, reject) => {
            axios({
                    method: "PUT",
                    data: payload,
                    url: state.api.updateSellerSingleProduct + id + "/",
                    contentType: "application/json",
                    headers: {
                        Authorization: "Bearer " + this.$cookies.get("access_token")
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("response");
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                    console.log("error in request", err);
                });
        });
    },


};