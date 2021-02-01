<template>
<div class="py-5">
    <b-container  id="Teachers">
        <b-row class="pb-5">
            <b-col cols=12 class="text-center">
            <h1 class="header">OUR TEAM</h1>
            </b-col>
        </b-row >
        <b-row class="pt-5">
            <b-col cols="3">   
                <img src="images/1.png" alt="Image" class="img-fluid mr-3" />
                <div class="text-center">
                    <h3>Zied Sradki</h3>
                    <span>Student at RBK</span>
                </div>
            </b-col>      
            <b-col cols="3">   
                <img src="images/4.png" alt="Image" class="img-fluid mr-3" />
                <div class="text-center">
                    <h3>khaled yaferni</h3>
                    <span>Student at RBK</span>
                </div>
            </b-col>           
            <b-col cols="3">   
                <img src="images/3.png" alt="Image" class="img-fluid mr-3" />
                <div class="text-center">
                    <h3>melek houidi</h3>
                    <span>Student at RBK</span>
                </div>
            </b-col>   
            <b-col cols="3">   
                <img src="images/2.png" alt="Image" class="img-fluid mr-3" />
                <div class="text-center">
                    <h3>wael jouini</h3>
                    <span>Student at RBK</span>
                </div>
            </b-col>       
        </b-row>
    </b-container>
</div>
</template>
<script>
export default {
  name: "Teachers",
  data() {
    return {
      info: null,
    };
  },
};
</script>
<style>
.header{
}
</style>
