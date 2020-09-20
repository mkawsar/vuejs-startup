<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <form method="#" action="#">
                    <div class="card-header">
                        <h4 class="card-title">
                            My Profile
                        </h4>
                    </div>
                    <div class="card-content">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" readonly placeholder="Name" class="form-control" v-model="user.name">
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" readonly placeholder="Enter email" class="form-control" v-model="user.email">
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" readonly placeholder="Phone" class="form-control" v-model="user.phone">
                        </div>
                    </div>
                </form>
            </div> <!-- end card -->
        </div> <!--  end col-md-6  -->
    </div>
</template>

<script>
    let userObj = {
        name: '',
        email: '',
        phone: ''
    };
    export default {
        name: "ShowProfile",

        data: function () {
            return {
                roles: [],
                user: userObj
            }
        },
        methods: {
            getUserDetails() {
                axios.get(this.$env.BACKEND_API + '/api/v1/auth/profile')
                    .then((response) => {
                        this.user = response.data;
                        //console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error.data);
                    })
            }
        },
        mounted: function () {
            this.getUserDetails();
        }
    }
</script>

<style scoped>

</style>
