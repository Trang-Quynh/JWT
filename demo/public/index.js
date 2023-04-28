function showHeader(){
    let htmlHeader = `
                     <button onclick="showHome()" >Home</button>
                     <button onclick="showFormAdd()">Add</button>
                  `
    $('#header').html(htmlHeader)
}

function showHome(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/products',
        headers:{
            'Content-Type':'application/json',
        },
        success: (products) => {
            let html = ` 
<body id="body">
<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
    <div class="container">
        <a class="navbar-brand w-8" href="#" data-config-id="brand">
            <img src="https://www.loopple.com/img/loopple-logo.png" width="80" alt="">
        </a>

        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon mt-2">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </span>
        </button>
        <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation" >
            <ul class="navbar-nav navbar-nav-hover ms-auto">
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Shop 
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Shop 
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Wedding
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Delivery
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Contact Us
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item mx-2">
                    <input style="display:inline-block;" type="search" id="search" name="search" class="form-control"
                           placeholder="商品名で検索">
                </li>
                <li class="nav-item ms-2">
                    <button href="javascript:void(0);" class="btn bg-gradient-dark mb-0" onclick="showFormSignUp()">
                        signup
                    </button>
                </li>
                <li class="nav-item ms-2">
                    <button href="javascript:void(0);" class="btn bg-gradient-dark mb-0" onclick="showFormLogin()">
                        login
                    </button>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div >
    <header class="">
        <div class="page-header min-vh-75">
            <span class="mask bg-gradient-info opacity-4"></span>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 my-auto text-white text-xl-left">
                        <h1 class="text-dark display-2 
 font-weight-bolder mb-4">Find </h1>
                        <p class="text-dark mb-0">Get 50% Off for your first purchase</p>
                        <p class="text-dark font-weight-bolder text-lg">FLOWER50</p>
                        <button type="submit" class="btn bg-gradient-primary mt-3 mb-0">Shop now</button>
                    </div>
                    <div class="col-lg-6">
                        <div class="positio-absolute rounded-circle end-4 top-0 mt-n4 shadow-lg d-xl-block d-none"
                             style="background-image: url('https://images.unsplash.com/photo-1617176756162-447320192d98?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1180&amp;q=80');width: 600px;height: 600px; background-position: center;background-size: cover;">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
 <section class="pt-6 pb-4">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h3 class="mb-5" spellcheck="false">Deals of the Day</h3>
                </div>`;
        products.forEach(item =>{
            html += `  
               <div class="col-lg-3 mb-lg-0 mb-4" style="margin: 20px 0;">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <img src="${item.image}" class="img-fluid border-radius-lg shadow">
                            </a>
                        </div>
                        <div class="card-body pt-3">
                            <div class="d-flex align-items-center">
                                <div>
                                    <span class="text-sm">${item.category.name}</span>
                                    <h4 class="card-description font-weight-bolder text-dark mb-4">
                                        ${item.name}</h4>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:;" class="btn btn-link text-dark p-0">
                                        <i class="fa fa-star text-lg" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <h5 class="mb-0 font-weight-bolder">${item.price}</h5>
                            </div>
<!--                            Chỗ này cho hàm mua hàng vào-->
                            <button href="javascript:;" class="btn btn-outline-dark mb-0" >Add to cart</button>
                        </div>
                    </div>
                </div>
      `
        })
            html += ` </div>
        </div>
    </section>
    </div>
<footer class="footer py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 mb-5 mb-lg-0">
                <h6 class="text-uppercase mb-2">Soft</h6>
                <p class="mb-4 pb-2">
                    The next generation of design systems.
                </p>
                <a href="javascript:;" class="text-secondary me-xl-4 me-3">
                    <span class="text-lg fab fa-facebook" aria-hidden="true"></span>
                </a>
                <a href="javascript:;" class="text-secondary me-xl-4 me-3">
                    <span class="text-lg fab fa-twitter" aria-hidden="true"></span>
                </a>
                <a href="javascript:;" class="text-secondary me-xl-4 me-3">
                    <span class="text-lg fab fa-instagram" aria-hidden="true"></span>
                </a>
                <a href="javascript:;" class="text-secondary me-xl-4 me-3">
                    <span class="text-lg fab fa-pinterest" aria-hidden="true"></span>
                </a>
                <a href="javascript:;" class="text-secondary me-xl-4 me-3">
                    <span class="text-lg fab fa-github" aria-hidden="true"></span>
                </a>
            </div>
            <div class="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4">
                <h6 class="text-sm">Company</h6>
                <ul class="flex-column ms-n3 nav">
                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:void(0);">
                            About Us
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Careers
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Press
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Blog
                        </a>
                    </li>
                </ul>
            </div>

            <div class="col-md-2 col-6 mb-md-0 mb-4">
                <h6 class="text-sm">Pages</h6>
                <ul class="flex-column ms-n3 nav">
                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Login
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Register
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Add list
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            <div class="col-md-2 col-6 mb-md-0 mb-4">
                <h6 class="text-sm">Legal</h6>
                <ul class="flex-column ms-n3 nav">
                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Terms
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            About Us
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Team
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Privacy
                        </a>
                    </li>
                </ul>
            </div>

            <div class="col-md-2 col-6 mb-md-0 mb-4">
                <h6 class="text-sm">Resources</h6>
                <ul class="flex-column ms-n3 nav">
                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Blog
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Service
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Product
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-secondary" href="javascript:;">
                            Pricing
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1">
        <div class="row">
            <div class="col-8 mx-lg-auto text-lg-center">
                <p class="text-sm text-secondary">
                    Copyright © 2022 Soft &amp; Loopple by Creative Tim.
                </p>
            </div>
        </div>
    </div>
</footer>`
            $('#body').html(html)
        }
    })
}




function showHomUser(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/products',
        headers:{
            'Content-Type':'application/json',
        },
        success: (products) => {
            console.log(products)
            let html = ` <section class="pt-6 pb-4">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h3 class="mb-5" spellcheck="false">Deals of the Day</h3>
                </div>`;
            products.forEach(item =>{
                html += `  
               <div class="col-lg-3 mb-lg-0 mb-4">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" class="d-block">
                                <img src="${item.image}" class="img-fluid border-radius-lg shadow">
                            </a>
                        </div>
                        <div class="card-body pt-3">
                            <div class="d-flex align-items-center">
                                <div>
                                    <span class="text-sm">${item.category.name}</span>
                                    <h4 class="card-description font-weight-bolder text-dark mb-4">
                                        ${item.name}</h4>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:;" class="btn btn-link text-dark p-0">
                                        <i class="fa fa-star text-lg" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <h5 class="mb-0 font-weight-bolder">${item.price}</h5>
                            </div>
                            <a href="javascript:;" class="btn btn-outline-dark mb-0">Add to cart</a>
                        </div>
                    </div>
                </div>
      `
            })
            html += ` </div>
        </div>
    </section>`
            $('#body').html(html)
        }
    })
}


function showFormAdd(){
let htmlFormAdd = `
                   <input type="text" id="price" placeholder="price">
                   <input type="text" id="image" placeholder="image">
                   <input type="text" id="name" placeholder="name">
                   <input type="text" id="category" placeholder="category">
                   <button type="submit" onclick="add()">submit</button>`

    $('#body').html(htmlFormAdd)
}

function add(){
    let price = $('#price').val()
    let image = $('#image').val()
    let name = $('#name').val()
    let category = $('#category').val()
    let product = {
        name: name,
        price: price,
        image: image,
        category: category
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/products',
        headers:{
            'Content-Type':'application/json',
        },
        //đối tượng XMLHttpRequest chỉ có thể gửi và nhận dữ liệu dưới dạng chuỗi, không thể trực tiếp truyền đối tượng JavaScript
        data: JSON.stringify(product),
        success: (message) => {
            console.log(message)
            showHome()
        }
    })
}
function deleteProduct(){
    let idDelete = $('#idDelete').val()
    let productToDelete = {
        idDelete:idDelete
    }
    $.ajax({
        type:'DELETE',
        url: 'http://localhost:3000/products',
        headers: {
            'Content-Type': 'application/json'
        },
        data:JSON.stringify(productToDelete),
        success: (message)=>{
            console.log(message);
            showHome()
        }
    })
}


function showFormUpdate(id){
    //truyền một biến từ button update vào chỗ :id
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/products/${id}`,
        success: function(product) {
            let htmlFormUpdate = `
                   <input type="text" id="id" name="id" value="${product[0].id}">
                   <input type="text" id="price" name="price" value="${product[0].price}">
                   <input type="text" id="image" name="image" value="${product[0].image}">
                   <input type="text" id="name" name="name" value="${product[0].name}">
                   <input type="text" id="category" name="category" value="${product[0].category ? product[0].category.id : ''}">
                   <button type="submit" onclick="update(${product[0].id})">submit</button>`
            $('#body').html(htmlFormUpdate)
        }
    });
}

function update(){
    let id = $('#id').val();
    let price = $('#price').val();
    let image = $('#image').val();
    let name = $('#name').val();
    let category = $('#category').val();
    let productToUpdate = {
        id: id,
        name: name,
        price: price,
        image: image,
        category: category
    }
    $.ajax({
        type: 'PUT',
        url: `http://localhost:3000/products/${id}`,
        headers:{
            'Content-Type': 'application/json',
        },
        data:JSON.stringify(productToUpdate),
        success: (message)=>{
            console.log('message' + message)
            showHome()
        }
    })
}

function showFormSignUp(){
    let htmlFormSignUp = `
   <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
    <div class="container">
        <a class="navbar-brand w-8" href="#" data-config-id="brand">
            <img src="https://www.loopple.com/img/loopple-logo.png" width="80" alt="">
        </a>
        <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
            <ul class="navbar-nav navbar-nav-hover ms-auto">
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" onclick="showHome()" class="nav-link ps-2 cursor-pointer">
                        Home
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);"  class="nav-link ps-2 cursor-pointer">
                        Shop Plants
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Wedding
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Delivery
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Contact Us
                    </a>
                </li>
            </ul>
           <ul class="navbar-nav ms-auto" style="margin-left: 140px;width: 399px;">
           </ul>
        </div>
    </div>
</nav>


      <section class="vh-100">
    <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
<!--      cho anh vao day-->
        <img style="width: 728px;height: 410px" src="" class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <h1>sign up</h1><br>
        <div>
          <div class="form-outline mb-4">
            <input type="text" id="username" name="username" class="form-control form-control-lg" required/>
            <label class="form-label" for="form1Example13">Username</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="text" id="password" name="password" class="form-control form-control-lg" required/>
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <!-- Checkbox -->
            <div class="form-check">
<!--              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />-->
              <label class="form-check-label" for="form1Example3" onclick="showFormSignUp()"> Ban da co tai khoan </label>
            </div>
          </div>
          <!-- Submit button -->
          <button class="btn btn-primary btn-lg btn-block" onclick="signup()">Sign up</button>
        </div>
      </div>
    </div>
  </div>
</section>
   `
    $('#body').html(htmlFormSignUp)

}
function signup(){
    let username = $('#username').val();
    let password = $('#password').val();
    let user = {
        username: username,
        password: password,
    }
    $.ajax({
        type: 'POST',
        url: `http://localhost:3000/users/signup`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(user),
        success: (message)=>{
            console.log(message)
            if (message === 'Đã có tài khoản') {
                alert('tai khoan da co');
            } else if(message === 'Dien thieu'){
                alert('Vui long nhap du')
            }else{
                alert('Tao tai khoan thanh cong');
                showFormLogin()
            }
        }
    })
}

function showFormLogin(){
    let htmlFormLogin = `
<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
    <div class="container">
        <a class="navbar-brand w-8" href="#" data-config-id="brand">
            <img src="https://www.loopple.com/img/loopple-logo.png" width="80" alt="">
        </a>
        <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
            <ul class="navbar-nav navbar-nav-hover ms-auto">
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" onclick="showHome()" class="nav-link ps-2 cursor-pointer">
                        Home
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);"  class="nav-link ps-2 cursor-pointer">
                        Shop Plants
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Wedding
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Delivery
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="javascript:void(0);" class="nav-link ps-2 cursor-pointer">
                        Contact Us
                    </a>
                </li>
            </ul>
           <ul class="navbar-nav ms-auto" style="margin-left: 140px;width: 399px;">
           </ul>
        </div>
    </div>
</nav>


      <section class="vh-100">
    <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
<!--      cho anh vao day-->
        <img style="width: 728px;height: 410px" src="" class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <h1>log in</h1><br>
        <div>
          <div class="form-outline mb-4">
            <input type="text" id="username" name="username" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Username</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="text" id="password" name="password" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <!-- Checkbox -->
            <div class="form-check">
<!--              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />-->
              <label class="form-check-label" for="form1Example3" onclick="showFormSignUp()"> Ban chua co tai khoan </label>
            </div>
          </div>
          <!-- Submit button -->
          <button class="btn btn-primary btn-lg btn-block" onclick="login()">Log in</button>
        </div>
      </div>
    </div>
  </div>
</section>
`
    $('#body').html(htmlFormLogin)
}

function login(){
    let username = $('#username').val();
    let password = $('#password').val();
    let user = {
        username: username,
        password: password,
    }
    $.ajax({
        type: 'POST',
        url: `http://localhost:3000/users/login`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(user),
        success: (message)=>{
            console.log(message)
            if(message != 'Username is not exits'){
                showHome()
            }
        }
    })
}














