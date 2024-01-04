from flask import Flask, render_template, url_for


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/ticket')
def ticket():
    return render_template('ticket.html')

@app.route('/profile_user')
def customer():
    return render_template('user_profile.html')

@app.route('/login_user')
def login_user():
    return render_template('user_login.html')

@app.route('/register_user')
def register_user():
    return render_template('user_register.html')


if __name__ == "__main__":
    app.run(debug=True)