function Contact(){
    return(<>
    <h1>Contact details</h1><div className="container1">
        <p>
            this is aphotography site where you can see my work that i have dine with my camera 
        </p>
        <p>
            phone:999999999<br></br>
            email:bharat.barru57@gmail.com
        </p>

    </div>
    <div className="container8">
             <form>
             <h4>for further details</h4>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
               <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Description</label>
                 <textarea class="form-control" id="exampleInputPassword1" placeholder="type your doubts"/>
               </div>
             <div class="mb-3 form-check">
                 <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                 <button type="submit" class="btn btn-primary">Submit</button>
                 </div>
            </form>
            </div>
            </>);
}
export default Contact