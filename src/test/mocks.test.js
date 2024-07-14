

jest.mock('../reader');

test ('Mock test', async () => {
    const asyncMock = jest.fn().mockResolvedValue(43);

    await asyncMock();

    expect(asyncMock).toHaveBeenCalledTimes(1);
})


test('async test', async () => {
    const asyncMock = jest.fn().mockRejectedValue(new Error('Async error message'));
  
    
    await expect(asyncMock()).rejects.toThrow(); 
  });