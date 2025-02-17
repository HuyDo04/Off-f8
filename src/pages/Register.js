function Register () {
    return /*html*/`
    <form action="" id="registerForm">
      <div class="mb-3">
        <label for="" class="form-label">Email</label>
        <input type="email" class="form-control" name="email" />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Password</label>
        <input type="password" class="form-control" name="password" />
      </div>

      <div class="mb-3">
        <button class="btn btn-primary">Register</button>
      </div>
    </form>
    `
}

export default Register;