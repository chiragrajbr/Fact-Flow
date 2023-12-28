
<div className="addpost">
<center>
  <div className="addpost-box">
    <div className="addpost-titile">
      <p>ADD POST </p>
    </div>
    <br />
    <form onSubmit={submitHandler}>
      <div className="title-container">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
     {/* <input
        className="addimage"
        type="file"
        alt="image"
        accept="image/*"
        onChange={handleImage}
      />
      <div className="image-container">
        {image && (
          <div className="addimage">
            <img
              src={image}
              alt="waiting"
              style={{ height: "470px", width: "400px" }}
            />{" "}
          </div>
        )}
     */ }
        <div className="desciption-container">
          <input
            type="text"
            placeholder="desciption"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button>submit</button>
      </div>
    </form>
  </div>
</center>
</div>
