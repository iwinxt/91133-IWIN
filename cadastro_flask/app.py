from flask import Flask, request, render_template, jsonify
import sqlite3

app = Flask(__name__)

def criar_banco():
    conn = sqlite3.connect('produto.db') 
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS produto (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

criar_banco()

@app.route('/')
def home():
    return render_template('index.html') 

@app.route('/produtos')
def pagina_produtos():
    return render_template('listar.html')  


@app.route('/adicionar', methods=['POST'])
def adicionar():
    dados = request.json
    nome = dados['nome']

    conn = sqlite3.connect('produto.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO produto (nome) VALUES (?)", (nome,))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Produto cadastrado com sucesso'})

@app.route('/api/listar')
def listar():
    conn = sqlite3.connect('produto.db')
    cursor = conn.cursor()
    cursor.execute('SELECT nome FROM produto')
    produtos = [linha[0] for linha in cursor.fetchall()]
    conn.close()
    return jsonify(produtos)

if __name__ == '__main__':
    app.run(debug=True)
