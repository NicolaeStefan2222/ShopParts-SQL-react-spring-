import React from "react";

const TIP = { 1: "Electric", 2: "Mecanic" };
const CAT = {
  1: "Sistem de franare",
  2: "Sistem de ungere",
  3: "Sistem de iluminare",
  4: "Sistem de directie",
  5: "Sistem de angrenare",
  6: "Elemente de caroserie",
  7: "Elemente electrice",
};

class AllProductsDB extends React.Component {
  state = { items: [], loading: true, error: "" };

  componentDidMount() {
    fetch("http://localhost:8080/produs")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((items) => this.setState({ items, loading: false, error: "" }))
      .catch((e) => this.setState({ error: String(e), loading: false }));
  }

  handleDelete = async (id) => {
    const prev = this.state.items;
    this.setState({ items: prev.filter((x) => x.id !== id) }); // optimist
    try {
      const res = await fetch(`http://localhost:8080/produs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } catch {
      this.setState({ items: prev, error: "Nu s-a putut șterge. Încearcă din nou." });
    }
  };

  render() {
    const { items, loading, error } = this.state;
    if (loading) return <p style={{ padding: 16 }}>Se încarcă…</p>;

    return (
      <div style={{ padding: 16 }}>
        <h2>All Products DB</h2>
        {error && <p style={{ color: "crimson" }}>Eroare: {error}</p>}

        {items.length === 0 ? (
          <p>Nu există produse încă.</p>
        ) : (
          <table border="1" cellPadding="8" style={{ width: "100%", background: "white" }}>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Denumire</th>
                <th>Preț</th>
                <th>Tip</th>
                <th>Categorie</th>
                <th>Data adăugării</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.descriere}</td>
                  <td>{Number(p.pret)}</td>
                  <td>{TIP[p.tipID] || p.tipID}</td>
                  <td>{CAT[p.categorieID] || p.categorieID}</td>
                  <td>{p.data_Adaugarii || "-"}</td>
                  <td>
                    <button onClick={() => this.handleDelete(p.id)}>Șterge</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default AllProductsDB;
