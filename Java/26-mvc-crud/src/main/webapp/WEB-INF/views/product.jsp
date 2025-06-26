<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
<jsp:include page="nav.jsp" />
<div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Product Form</h3>
      <form method="post" action="/product/dml">
      	Id: <input type="number" name="id" class="form-control" value="${product.id }" />
      	Name: <input type="text" name="name" class="form-control" value="${product.name }"  />
      	Category: <input type="text" name="category" class="form-control" value="${product.category }"  />
      	Price: <input type="number" name="price" class="form-control" value="${product.price }"  />
      	<br/>
      	<input name="add" type="submit" value="Add" class="btn btn-primary" />&nbsp;
      	<input name="update" type="submit" value="Update" class="btn btn-warning" />&nbsp;
      	<input name="delete" type="submit" value="Delete" class="btn btn-danger" />&nbsp;
      	
      </form>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
  <div class="row">
  <div class="col-sm-2"></div>
  <div class="col-sm-8">
  	<table class="table table-bordered table-striped table-hover">
  		<thead>
  			<th>Id</th><th>Name</th><th>Category</th><th>Price</th><th></th>
  		</thead>
  		<tbody>
  			<c:forEach var="p" items="${products }">
  				<tr>
  					<td>${p.id }</td>
  					<td>${p.name }</td>
  					<td>${p.category }</td>
  					<td>${p.price }</td>
  					<td><a href="/product/select/${p.id }" class="btn btn-info">Select</a></td>
  				</tr>
  			</c:forEach>
  		</tbody>
  	</table>
  </div>
  <div class="col-sm-2"></div>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  
</div>
</body>
</html>