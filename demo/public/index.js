function showHome() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/products',
        headers:{
            'Content-Type':'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (products) => {

            let html = `<div id="product" class="row">`;
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
                           <div id="buttonAddToCart">
                            <button href="javascript:;" class="btn btn-outline-dark mb-0" id="idBy" value="${item.id}" onclick="">Add to cart</button>
                        </div>
                        <div id="buttonDeleteUpdate">
                          <button href="javascript:;" class="btn btn-outline-dark mb-0" id="idDelete" value="${item.id}" onclick="deleteProduct(${item.id})" >Delete</button>
                            <button href="javascript:;" class="btn btn-outline-dark mb-0" id="idUpdate" value="${item.id}" onclick="showFormUpdate(${item.id})">Update</button>
                          </div>
                        </div>
                    </div>
                </div>
      `
            })
            html += `</div>`
            $('#product').html(html);
        }
    })
}
document.addEventListener("DOMContentLoaded", function() {
    showHome();
});

function showFormAdd(){
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/products/add`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: function(data) {
            console.log(data)
            let htmlFormAdd = `
  <div class="form-group">
    <label for="exampleFormControlInput1">name</label>
    <input type="text" class="form-control" id="name" placeholder="name">
  </div>
    <div class="form-group">
    <label for="exampleFormControlInput1">price</label>
    <input type="text" class="form-control" id="price" placeholder="price">
  </div>
   <div class="form-group">
    <label for="exampleFormControlFile1" >image</label>
    <input type="file" class="form-control-file" onchange="uploadImage(event)" >
  </div> 
     <div class="form-group">
    <label for="exampleFormControlFile1">imageLink</label>
    <input type="text" class="form-control-file" id="image" >
  </div> 
<div id="imgDiv"></div>
 <div class="form-group">
    <label for="exampleFormControlSelect1" >category</label>
    <select class="form-control" id="category" >`
            data.category.forEach(item =>{
                htmlFormAdd += `<option value="${item.id}">${item.name}</option>`
            })
            htmlFormAdd += `</select>
            </div>
            <button type="submit" onclick="add()">submit</button>
`
            $('#product').html(htmlFormAdd)
        }
    });
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
        url: 'http://localhost:3000/products/add',
        headers:{
            'Content-Type':'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        //đối tượng XMLHttpRequest chỉ có thể gửi và nhận dữ liệu dưới dạng chuỗi, không thể trực tiếp truyền đối tượng JavaScript
        data: JSON.stringify(product),
        success: (message) => {
            console.log(message)
            showHome()
        }
    })
}



function showFormUpdate(id){
    //truyền một biến từ button update vào chỗ :id
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
            'Content-Type': 'application/json',
             Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: function(data) {
            console.log(data)
            let htmlFormUpdate = `
 <div class="form-group">
    <label for="exampleFormControlInput1">id</label>
    <input type="text" class="form-control" id="id" value="${data.product[0].id}">
  </div> 
  <div class="form-group">
    <label for="exampleFormControlInput1">name</label>
    <input type="text" class="form-control" id="name" value="${data.product[0].name}">
  </div>
    <div class="form-group">
    <label for="exampleFormControlInput1">price</label>
    <input type="text" class="form-control" id="price" value="${data.product[0].price}" >
  </div>
   <div class="form-group">
    <label for="exampleFormControlFile1" >image</label>
    <input type="file" class="form-control-file" onchange="uploadImage(event)">
  </div> 
     <div class="form-group">
    <label for="exampleFormControlFile1">imageLink</label>
    <input type="text" class="form-control-file" id="image" >
  </div> 
<div id="imgDiv"></div>
 <div class="form-group">
    <label for="exampleFormControlSelect1" >category</label>
    <select class="form-control" id="category" >`
            data.category.forEach(item =>{
                htmlFormUpdate += `<option value="${item.id}">${item.name}</option>`
            })
            htmlFormUpdate += `</select>
            </div>
            <button type="submit" onclick="update()">submit</button>
`
            $('#product').html(htmlFormUpdate)
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
            Authorization: 'Bearer ' + localStorage.getItem('token')
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
          
          <div class="form-outline mb-4">
            <input type="text" id="role" name="role" value="user" class="form-control form-control-lg"/>
            <label class="form-label" for="form1Example23">Role</label>
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
    let role = $('#role').val();
    let user = {
        username: username,
        password: password,
        role: role,
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
<div id="product">
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
</div>
`
    $('#product').html(htmlFormLogin)
}
document.addEventListener("DOMContentLoaded", function() {
    showFormLogin();
});


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
            if(message === 'Username is not exits'){
               alert('Username is not exits')
            }else if(message === 'Password is wrong'){
                alert('Password is wrong')
            }else{
                let token = message.token
                localStorage.setItem('token', token)
                showHome(token);
                }
            }
    })
}







function deleteProduct(idDelete){
    console.log(1)
    console.log(localStorage.getItem('token'))
    $.ajax({
        type:'DELETE',
        url: `http://localhost:3000/products/${idDelete}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (message)=>{
            console.log(message);
            showHome()
        }
    })
}
 function logout(){
     localStorage.removeItem('token');
    alert('Da dang xuat thanh cong')
 }


function uploadImage(e) {
    let fbBucketName = 'images';
    let uploader = document.getElementById('uploader');
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            document.getElementById('imgDiv').innerHTML = `<img src="${downloadURL}" alt="" style='width: 50px; height:50px'>`
            // localStorage.setItem('image', downloadURL);
            // alert(downloadURL)
            document.getElementById('image').value = downloadURL
        });
}


$("#search").on("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        let searchTerm = $(this).val();
        let searchTermEncoded = encodeURIComponent(searchTerm)
        $.ajax({
            type: "GET",
            url: `http://localhost:3000/products/search?search=${searchTermEncoded}`,
            headers: {
                'Content-Type': 'application/json',
            },
            success: (products)=> {
                console.log(products)

                let html = `<div id="product" class="row">`;
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
<!--                           Chỗ này cho hàm mua hàng vào-->
                           <div id="buttonAddToCart">
                            <button href="javascript:;" class="btn btn-outline-dark mb-0" id="idBy" value="${item.id}" onclick="">Add to cart</button>
                        </div>
                        <div id="buttonDeleteUpdate">
                          <button href="javascript:;" class="btn btn-outline-dark mb-0" id="idDelete" value="${item.id}" onclick="deleteProduct(${item.id})" >Delete</button>
                            <button href="javascript:;" class="btn btn-outline-dark mb-0" id="idUpdate" value="${item.id}" onclick="showFormUpdate(${item.id})">Update</button>
                          </div>
                        </div>
                    </div>
                </div>
      `
                })
                html += `</div>`
                $('#product').html(html);
            },
        });
    }
});















