import React from "react";
import "./AddForm.css";

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      status: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var data = {};

    var data = {
      produsID: formData.get("produsID"),
      descriere: formData.get("descriere"),
      pret: formData.get("pret"),
      tipID: formData.get("tipID"),
      categorieID: formData.get("categorieID"),
      data_Adaugarii: formData.get("data_Adaugarii"),
    };

    var self = this;

    fetch("http://localhost:8080/produs/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (response) {
        self.setState({
          status: response,
        });
      });
  }

  render() {
    return (
      <div className="contact-form">
        <h3 className="admin">Only admin is allowed to enter data here !! &#128517; </h3>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label className="form-label">Denumire produs</label>
            <input
              placeholder="Ex: Disc frana"
              className="form-element"
              onSubmit={this.handleSubmit}
              type="text"
              name="descriere"
            />
          </div>
          <div className="form-row">
            <label className="form-label">Pret (Ron)</label>

            <input
              className="form-element"
              onSubmit={this.handleSubmit}
              type="number"
              step="0.01"
              required
              id="pret"
              name="pret"
            ></input>
          </div>
          <div className="form-row">
            <label className="form-label" onSubmit={this.handleSubmit}>Tipul Produsului</label>
            <select type="number" name="tipID">
              <option value="0">Selecteaza un tip</option>
              <option value="1">1.Electric</option>
              <option value="2">2.Mecanic</option>
            </select>
          </div>
          <div className="form-row">
            <label className="form-label" onSubmit={this.handleSubmit}>
              Categorie
            </label>
            <select type="number" name="categorieID">
              <option value="0">Selecteaza o categorie</option>
              <option value="1">1.Sistem de franare</option>
              <option value="2">2.Sistem de ungere</option>
              <option value="3">3.Sistem de iluminare</option>
              <option value="4">4.Sistem de directie</option>
              <option value="5">5.Sistem de angrenare</option>
              <option value="6">6.Elemente de caroserie</option>
              <option value="7">7.Elemente electrice</option>
            </select>
          </div>
          <div className="form-row">
            <label className="form-label">Data Adaugarii</label>
            <input
              className="form-element"
              onSubmit={this.handleSubmit}
              type="datetime-local"
              name="data_Adaugarii"
            />
          </div>
          <div className="form-row">
            <button onSubmit={this.handleSubmit} className="form-button">
              Send
            </button>
            <div id="status">
              <h3> {this.state.status}</h3>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddForm;
