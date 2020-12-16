class HouseController {
  async store(request, response) {
    return response.json({ ok: true });
  }
}

export default new HouseController();
