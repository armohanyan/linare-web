<template>
  <div class="contact_page_content container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card admin_forms">
          <div class="card-body">
            <h2 class="card-title admin_contact_form_heading">Contact Form</h2>
              <div class="mb-3">
                <input type="number" class="form-control admin_contact_form_inputs" placeholder="Phone Number">
              </div>
              <div class="mb-3">
                <input type="number" class="form-control admin_contact_form_inputs" placeholder="Phone Number 2">
              </div>
              <div class="mb-3">
                <input type="email" class="form-control admin_contact_form_inputs" placeholder="Email">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control admin_contact_form_inputs" placeholder="Address">
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary admin_contact_send_btn">Send</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.contact_page_content {
  padding: 2%;
}

.admin_contact_form_heading {
  color: #2490EB;
  font-size: 35px;
  font-weight: 600;
  text-align: start;
  margin-bottom: 3%;
}

.admin_contact_form_inputs {
  border-radius: 5px;
  padding: 2%;
  border: 2px solid #9EA2AF;
}

.admin_forms {
  gap: 30px;
}

.admin_contact_send_btn {
  width: 30%;
  padding: 1% 4%;
}
</style>
