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

  async handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget; // <— salvezi referința la <form>
    const formData = new FormData(form);

    const payload = {
      descriere: formData.get("descriere")?.trim(),
      pret: Number(formData.get("pret")),
      tipID: Number(formData.get("tipID")),
      categorieID: Number(formData.get("categorieID")),
      data_Adaugarii: formData.get("data_Adaugarii"),
    };

    try {
      const res = await fetch("http://localhost:8080/produs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const created = await res.json();

      this.setState({ status: `Produs adăugat (#${created.id}) ✅` });
      form.reset(); // <— folosești referința salvată
    } catch (err) {
      this.setState({ status: `Eroare: ${String(err)}` });
    }
  }

  render() {
    return (
      <div className="contact-form">
        <h3 className="admin">
          Only admin is allowed to enter data here !! 🥳
        </h3>

        <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-row">
            <label className="form-label" htmlFor="descriere">
              Denumire produs
            </label>
            <input
              id="descriere"
              className="form-element"
              type="text"
              name="descriere"
              placeholder="Ex: Disc frana"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="pret">
              Pret (Ron)
            </label>
            <input
              id="pret"
              className="form-element"
              type="number"
              step="0.01"
              min="0"
              name="pret"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="tipID">
              Tipul Produsului
            </label>
            <select id="tipID" name="tipID" required>
              <option value="">Selecteaza un tip</option>
              <option value="1">1.Electric</option>
              <option value="2">2.Mecanic</option>
            </select>
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="categorieID">
              Categorie
            </label>
            <select id="categorieID" name="categorieID" required>
              <option value="">Selecteaza o categorie</option>
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
            <label className="form-label" htmlFor="data_Adaugarii">
              Data Adaugarii
            </label>
            <input
              id="data_Adaugarii"
              className="form-element"
              type="datetime-local"
              name="data_Adaugarii"
              required
            />
          </div>

          <div className="form-row">
            <button type="submit" className="form-button">
              Send
            </button>
            <div id="status">
              <h3>{this.state.status}</h3>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddForm;
