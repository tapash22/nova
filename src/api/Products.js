import Api from './Api';

export default{

    getProduct(){
        return Api().get('/product');
    },

    addProduct(product){
        return Api().post('/product/add',product);
    },

    deleteProduct(id){
        return Api().delete(`/product/delete/${id}`);
    },

    getAntibiotic(){
        return Api().get('/product/antibiotic');
    },

    getNutritional(){
        return Api().get('/product/nutritional');
    },

    getHarbal(){
        return Api().get('/product/harbal');
    },

    getProbiotics(){
        return Api().get('/product/probiotics');
    },

    getAnticoccidial(){
        return Api().get('/product/anticoccidial');
    },

    // getOthers(){
    //     return Api().get('/product/others');
    // },

    getPenathaone(){
        return Api().get('/product/penathaone');
    },

    getAntibiotics(){
        return Api().get('/product/antibiotics');
    },

    getProductid(id){
        return Api().get(`/product/products/${id}`);
    }

}