# Vault

## Setup Vault to ,anage the DB credentials

Vault can leverage the DB DB secrets engine to manage the passwords for the DB. To do this we must follow the steps below:


- Enable Vault DB secrets engine

```bash
vault secrets enable database
```

- Enable secrets for postgreSQL DB

```bash
vault write database/config/postgresql \
        plugin_name=postgresql-database-plugin \
        allowed_roles="*" \
        connection_url=postgresql://{{username}}:{{password}}@nodepgdbcont:5432/postgres?sslmode=disable \
        username="postgres" \
        password="TestDB@home2"
```
- Optional: Change password from the default to a Vault managed password. This adds a security to the process as only Vault will have access to that particular credential.

```bash
vault write -force database/rotate-root/postgresql
```

# Getting Vault to manage DB credentials
To let Vault manage your DB credentials, we must first decide between static credentials (manage only an existing user's password) vs dynamic credentials (Vault creates and manages user, password and user access). While the Vault procedure to either of those options is quite similar,``` the implication on how you will manage security are quite significant. One requires more human planning while the other is almost fully automated.

allowed_roles="*" \

Once you have decided which way to go, the first step is to create a Vault user and associate
it with the correct policy that will enable th user to create and and administer the DB secrets. This will allow us to manage the DB secrets without having to use the root token. Details on how to do this are in ```./secrets/instructions/DBSecretsAdminCreation.txt```

Afterwards, you can follow the step to create static secrets in ```./secrets/instructions/EnableDBSecrets.txt```  and dynamic secrets in ```./secrets/instructions/EnableDBSecretsDynamic.txt``` .
