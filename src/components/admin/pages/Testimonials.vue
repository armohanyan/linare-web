<template>
  <div class="testimonials_page_content container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card admin_testimonials_content">
          <div class="card-body admin_testimonials">
            <input type="file" class="form-control mb-3">
            <input class="form-control mb-3" type="text" placeholder="Name">
            <div class="form-group testimonials_text">
              <textarea class="form-control testimonial_message" placeholder="Testimonials"></textarea>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-primary add_testimonials">Add Testimonial</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminTestimonialsPage",
};
</script>

<style scoped>
.testimonials_page_content {
  padding: 2%;
}

.admin_testimonials_content {
  padding: 2%;
}

.admin_testimonials {
  border: 2px solid #2490EB;
  border-radius: 7px;
  padding: 2%;
}

.testimonial_message {
  margin-top: 25px;
  width: 100%;
}

.add_testimonials {
  margin-top: 3%;
  border: none;
  border-radius: 5px;
  padding: 1.5% 2%;
  font-size: 18px;
}
</style>
