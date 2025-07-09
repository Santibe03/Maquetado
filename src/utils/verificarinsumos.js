// src/utils/verificarInsumos.js

export function verificarDisponibilidadInsumos(producto, cantidadDeseada, inventario) {
  const faltantes = [];

  for (const insumoNecesario of producto.insumos) {
    const insumoInventario = inventario.find(
      (i) => i.nombre.toLowerCase() === insumoNecesario.nombreInsumo.toLowerCase()
    );

    const cantidadRequerida = insumoNecesario.cantidadNecesaria * cantidadDeseada;

    if (!insumoInventario) {
      faltantes.push({
        nombre: insumoNecesario.nombreInsumo,
        motivo: 'No se encuentra en el inventario'
      });
    } else if (insumoInventario.cantidad < cantidadRequerida) {
      faltantes.push({
        nombre: insumoNecesario.nombreInsumo,
        motivo: `Faltan ${cantidadRequerida - insumoInventario.cantidad} ${insumoNecesario.unidad}`
      });
    }
  }

  return faltantes.length > 0 ? faltantes : true;
}

