import jwt from 'jsonwebtoken';
import { promisify } from 'util';
/**
 * Meddlewares de autenticação.
 */
const userAuthorization = async (req, res, next) => {
  const [, token] = String(req.headers.authorization).split(' ');
  // Caso o Token não seja enviado no Header
  if (!token) {
    return res.status(401).send({ error: 'Token é necessário!' });
  }

  try {
    const { id } = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    req.userId = id; // Passando para meu próximo meddleaware de update o ID
    next();
  } catch (error) {
    return res.status(401).send({ error: 'Token inválido!' });
  }
};

/**
 * Meddlewares para verificar se o usário que deseja cadastrar uma aluno
 * é um administrador do sistema
 */
const userIsAdmin = async (req, res, next) => {
  const [, token] = String(req.headers.authorization).split(' ');
  // Caso o Token não seja enviado no Header
  if (!token) {
    return res.status(401).send({ error: 'Token é necessário!' });
  }

  try {
    const { admin } = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET,
    );
    if (!admin) {
      return res.status(401).send({
        error:
          'Não tem permissão para cadastrar ou alterar aluno, você precisa ser admin',
      });
    }
    next();
  } catch (error) {
    return res.status(401).send({ error: 'Token inválido!' });
  }
};

export { userAuthorization, userIsAdmin };
