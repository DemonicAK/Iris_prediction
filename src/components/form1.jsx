<form>
  <div className="mb-3">
    <label htmlFor="Input_p1" className="form-label">
      sepal length (cm)
    </label>
    <input
      className="form-control"
      type="text"
      id="Input_p1"
      aria-describedby="Help_p1"
      name="p1"
      onChange={HandleChange}
      value={values.p1}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="Input_p2" className="form-label">
      sepal width (cm)
    </label>
    <input
      type="text"
      className="form-control"
      id="Input_p2"
      aria-describedby="Help_p2"
      name="p2"
      onChange={HandleChange}
      value={values.p2}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="Input_p3" className="form-label">
      petal length (cm)
    </label>
    <input
      type="text"
      className="form-control"
      id="Input_p3"
      aria-describedby="Help_p3"
      name="p3"
      onChange={HandleChange}
      value={values.p3}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="Input_p4" className="form-label">
      petal width (cm)
    </label>
    <input
      type="text"
      className="form-control"
      id="Input_p4"
      aria-describedby="Help_p4"
      name="p4"
      onChange={HandleChange}
      value={values.p4}
    />
  </div>

  <div className="mb-3 form-check"></div>
  <button type="submit" className="btn btn-primary" onClick={HandleClick}>
    predict
  </button>
</form>;
