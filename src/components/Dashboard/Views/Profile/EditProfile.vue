<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <form>
                    <div class="card-header">
                        <h4 class="card-title">
                            My Profile
                        </h4>
                    </div>
                    <div class="card-content">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Name" name="name"
                                   v-validate="modelValidations.name"
                                   class="form-control" v-model="user.name">
                            <small class="text-danger" v-show="name.invalid">
                                {{ getError('name') }}
                            </small>
                        </div>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" readonly placeholder="Enter email" class="form-control" v-model="user.email">
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" placeholder="Phone" name="phone"
                                   v-validate="modelValidations.phone"
                                   class="form-control" v-model="user.phone">
                            <small class="text-danger" v-show="phone.invalid">
                                {{ getError('phone') }}
                            </small>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" @click.prevent="updateUserData" class="btn btn-fill btn-default btn-wd">Update</button>
                    </div>
                </form>
            </div> <!-- end card -->
        </div> <!--  end col-md-6  -->
    </div>
</template>

<script>
    import {mapFields} from 'vee-validate';
    let userObj = {
        name: '',
        email: '',
        phone: ''
    };
    export default {
        computed: {
            ...mapFields(['name', 'phone'])
        },
        name: "EditProfile",
        data: function () {
            return {
                editData: {},
                roles: [],
                user: userObj,
                model: {
                    name: '',
                    phone: '',
                },
                modelValidations: {
                    name: {
                        required: true
                    },
                    phone: {
                        required: true,
                        min: 11,
                        max: 15
                    },
                }
            }
        },
        methods: {
            getError(fieldName) {
                return this.errors.first(fieldName)
            },
            validate() {
                this.$validator.validateAll().then(isValid => {
                    this.$emit('on-submit', this.registerForm, isValid)
                })
            },

            getUserDetails() {
                axios.get(this.$env.BACKEND_API + '/api/v1/auth/profile')
                    .then((response) => {
                        this.user = response.data;
                    })
                    .catch((error) => {
                        console.log(error.data);
                    })
            },

            updateUserData() {
                this.$validator.validateAll().then(isValid => {
                    if (isValid) {
                        this.editData.id = this.user.id;
                        this.editData.name = this.user.name;
                        this.editData.phone = this.user.phone;
                        axios.put(this.$env.BACKEND_API + '/api/v1/auth/profile', this.editData)
                            .then((response) => {
                                this.$notification.notify(this, 'Success!', response.data.message)
                            })
                            .catch((error) => {
                                this.$notification.notifyError(this, error.response.data);
                            })
                    }
                })
            },
        },
        mounted: function () {
            this.getUserDetails();
        }
    }
</script>

<style scoped>

</style>
