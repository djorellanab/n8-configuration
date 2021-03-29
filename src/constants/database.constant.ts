export default {
    SCHEMA: "business",
    ENTITIES:{
        EMPLOYEE:{
            MODEL:"employee",
            ROUTING:"employees",
            SCHEMA:"EMPLOYEE_SCHEMA"
        },
        EMPLOYEE_TYPE:{
            MODEL:"employee_type",
            ROUTING:"employee-types",
            SCHEMA:"EMPLOYEE_TYPE_SCHEMA"
        },
        SHOP:{
            MODEL:"shop",
            ROUTING:"shops",
            SCHEMA:"SHOP_SCHEMA"
        },
        SHOP_EMPLOYEE:{
            MODEL:"shop_employee",
            ROUTING:"shop-employees",
            SCHEMA:"SHOP_EMPLOYEE_SCHEMA"
        }
    }
}